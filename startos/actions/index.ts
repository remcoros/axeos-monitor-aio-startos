import { sdk } from '../sdk'
import { config } from './config'
import { reloadPrometheusConfig } from './reloadPrometheusConfig'

export const actions = sdk.Actions.of()
  .addAction(config)
  .addAction(reloadPrometheusConfig)
