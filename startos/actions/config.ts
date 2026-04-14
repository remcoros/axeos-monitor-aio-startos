import { axeosConfig } from '../fileModels/axeos.yml'
import { sdk } from '../sdk'
import { T } from '@start9labs/start-sdk'
import { reloadPrometheusConfig } from './reloadPrometheusConfig'
import { store } from '../fileModels/store.json'
import { i18n } from '../i18n'

const { InputSpec, Value, List } = sdk

export const inputSpec = InputSpec.of({
  ip_addresses: Value.list(
    List.text(
      {
        name: i18n('Bitaxe IP Addresses'),
        description: i18n('IP address of each AxeOS/Bitaxe instance to monitor.'),
        minLength: 1,
      },
      {
        placeholder: '192.168.1.100',
        inputmode: 'url',
        patterns: [
          {
            regex: '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
            description: i18n('Must be a valid IPv4 address (e.g. 192.168.1.100)'),
          },
        ],
      },
    ),
  ),
  axeosVersion: Value.select({
    name: i18n('AxeOS (ESP-Miner) Version'),
    description: i18n('The version of AxeOS (ESP-Miner) you are running.'),
    default: '2.11',
    values: { '2.11': '>= 2.11.x', '2.10': '<= 2.10.x' },
  }),
  scrape_interval: Value.number({
    name: i18n('Scrape Interval'),
    description: i18n('How often to scrape for metrics. Default is 15 seconds.'),
    required: true,
    default: 15,
    integer: true,
    units: 'seconds',
    step: 1,
  }),
})

type InputSpec = typeof inputSpec._TYPE
type PartialInputSpec = typeof inputSpec._PARTIAL

export const config = sdk.Action.withInput(
  // id
  'config',

  // metadata
  async ({ effects }) => ({
    name: i18n('Configure AxeOS Monitor'),
    description: i18n('Configure AxeOS Monitor settings'),
    warning: null,
    allowedStatuses: 'any',
    group: 'Configuration',
    visibility: 'enabled',
  }),

  // form input specification
  inputSpec,

  // optionally pre-fill the input form
  async ({ effects }) => readSettings(effects),

  // the execution function
  ({ effects, input }) => writeSettings(effects, input),
)

async function readSettings(effects: T.Effects): Promise<PartialInputSpec> {
  const conf = await axeosConfig.read().once()
  const ip_addresses =
    conf?.scrape_configs[0]?.static_configs[0]?.targets.map((target) =>
      target.replace('http://', '').replace('/api/system/info', ''),
    ) ?? []

  const storeData = await store.read().once()
  const axeosVersion = storeData?.axeosVersion as InputSpec['axeosVersion']

  return {
    ip_addresses,
    axeosVersion,
    scrape_interval: parseInt(
      conf?.scrape_configs[0]?.scrape_interval?.replace('s', '') ?? '15',
    ),
  }
}

async function writeSettings(effects: T.Effects, input: InputSpec) {
  const targets = input.ip_addresses.map((ip) => `http://${ip}/api/system/info`)

  await axeosConfig.write(effects, {
    scrape_configs: [
      {
        job_name: 'axeos',
        scrape_interval: `${input.scrape_interval}s`,
        metrics_path: '/probe',
        params: { module: ['axeos'] },
        static_configs: [
          {
            targets,
          },
        ],
        relabel_configs: [
          { source_labels: ['__address__'], target_label: '__param_target' },
          {
            source_labels: ['__address__'],
            regex: 'http://([0-9]+(?:\.[0-9]+){3})/.*',
            target_label: 'instance',
          },
          { target_label: '__address__', replacement: '127.0.0.1:7979' },
        ],
      },
    ],
  })

  await reloadPrometheusConfig.run({
    effects,
    input: {},
  })

  // only write axeosVersion to store if changed to avoid unnecessary restart
  const storeData = await store.read().once()
  if (storeData?.axeosVersion !== input.axeosVersion) {
    await store.merge(effects, {
      axeosVersion: input.axeosVersion,
    })
  }
}
