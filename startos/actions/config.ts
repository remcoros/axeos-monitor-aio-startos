import { axeosConfig } from '../fileModels/axeos.yml'
import { sdk } from '../sdk'
import { T } from '@start9labs/start-sdk'
import { reloadPrometheusConfig } from './reloadPrometheusConfig'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  ip_addresses: Value.textarea({
    name: 'AxeOS IP Address(es)',
    description:
      'IP Address(es) of the AxeOS instance(s) to monitor. One IP address per line.',
    required: true,
    default: '',
    placeholder: '',
  }),
  scrape_interval: Value.number({
    name: 'Scrape Interval',
    description: 'How often to scrape for metrics. Default is 15 seconds.',
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
    name: 'Add Bitaxe/AxeOS IP Address(es)',
    description: 'Add IP address(es) to monitor.',
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
  const ip_addresses = conf?.scrape_configs[0]?.static_configs[0]?.targets
    .map((target) =>
      target.replace('http://', '').replace('/api/system/info', ''),
    )
    .join('\n')

  return {
    ip_addresses: ip_addresses ?? '',
    scrape_interval: parseInt(
      conf?.scrape_configs[0]?.scrape_interval?.replace('s', '') ?? '15',
    ),
  }
}

async function writeSettings(effects: T.Effects, input: InputSpec) {
  var ip_addresses =
    input.ip_addresses
      ?.split(/[\s,;\r?\n]+/)
      .map((ip) => ip.trim())
      .filter((ip) => ip.length > 0)
      .map((ip) => `http://${ip}/api/system/info`) ?? []

  await axeosConfig.write(effects, {
    scrape_configs: [
      {
        job_name: 'axeos',
        scrape_interval: `${input.scrape_interval}s`,
        metrics_path: '/probe',
        params: { module: ['axeos'] },
        static_configs: [
          {
            targets: ip_addresses,
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
}
