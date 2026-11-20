import { sdk } from '../sdk'
import { config } from './config'
import { reloadPrometheusConfig } from './reloadPrometheusConfig'
import { resetGrafanaAdminPassword } from './resetGrafanaAdminPassword'
import { showGrafanaCredentials } from './showGrafanaCredentials'

export const actions = sdk.Actions.of()
  .addAction(config)
  .addAction(reloadPrometheusConfig)
  .addAction(resetGrafanaAdminPassword)
  .addAction(showGrafanaCredentials)
