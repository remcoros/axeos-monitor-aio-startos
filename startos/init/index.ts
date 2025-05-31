import { sdk } from '../sdk'
import { setDependencies } from '../dependencies'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../install/versionGraph'
import { actions } from '../actions'
import { restoreInit } from '../backups'
import {
  defaultPrometheusConfig,
  prometheusConfig,
} from '../fileModels/prometheus.yml'
import { config } from '../actions/config'
import { axeosConfig } from '../fileModels/axeos.yml'

const addConfigTask = sdk.setupOnInit(async (effects, kind) => {
  // create default prometheus config if it doesn't exist
  const conf = await prometheusConfig.read().once()
  if (!conf) {
    await prometheusConfig.write(effects, defaultPrometheusConfig)
  }

  // check if scrape config for AxeOS is present
  const axeosConf = await axeosConfig.read().once()
  const numTargets =
    axeosConf?.scrape_configs[0]?.static_configs[0]?.targets?.length ?? 0
  if (!axeosConf || numTargets === 0) {
    await sdk.action.createOwnTask(effects, config, 'critical', {
      reason: 'Add Bitaxe/AxeOS IP address(es) to monitor',
    })
  }
})

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  setInterfaces,
  setDependencies,
  actions,
  addConfigTask,
)

export const uninit = sdk.setupUninit(versionGraph)
