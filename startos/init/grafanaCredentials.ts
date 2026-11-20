import { utils } from '@start9labs/start-sdk'
import { showGrafanaCredentials } from '../actions/showGrafanaCredentials'
import { grafanaStore } from '../fileModels/grafanaStore.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// Grafana applies GF_SECURITY_ADMIN_PASSWORD only when it creates its database,
// so only a fresh install gets a generated password.
export const grafanaCredentials = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  await grafanaStore.merge(effects, {
    adminPassword: utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 22 }),
  })
  await sdk.action.createOwnTask(effects, showGrafanaCredentials, 'important', {
    reason: i18n('Get the Grafana admin password before signing in'),
  })
})
