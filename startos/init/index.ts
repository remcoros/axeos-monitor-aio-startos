import { config } from '../actions/config'
import { actions } from '../actions'
import { restoreInit } from '../backups'
import { dependencies } from '../dependencies'
import { axeosConfig } from '../fileModels/axeos.yml'
import {
  defaultPrometheusConfig,
  prometheusConfig,
} from '../fileModels/prometheus.yml'
import { store } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../versions'
import { grafanaCredentials } from './grafanaCredentials'

const addConfigTask = sdk.setupOnInit(async (effects) => {
  if (!(await prometheusConfig.read().once())) {
    await prometheusConfig.write(effects, defaultPrometheusConfig)
  }

  const axeosConf = await axeosConfig.read().once()
  const hasTargets =
    (axeosConf?.scrape_configs[0]?.static_configs[0]?.targets?.length ?? 0) > 0

  if (!hasTargets) {
    await sdk.action.createOwnTask(effects, config, 'critical', {
      reason: i18n('Add the IP address of each Bitaxe you want to monitor'),
    })
  } else if (!(await store.read().once())) {
    // Pre-0.4 installs predate store.json and so never chose a version.
    await sdk.action.createOwnTask(effects, config, 'critical', {
      reason: i18n('Select the AxeOS (ESP-Miner) version your miners run'),
    })
  }
})

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  setInterfaces,
  actions,
  dependencies,
  addConfigTask,
  grafanaCredentials,
)

export const uninit = sdk.setupUninit(versionGraph)
