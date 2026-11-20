import { grafanaStore } from '../fileModels/grafanaStore.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const showGrafanaCredentials = sdk.Action.withoutInput(
  // id
  'show-grafana-credentials',

  // metadata
  async ({ effects }) => ({
    name: i18n('Grafana Credentials'),
    description: i18n(
      'Show the Grafana admin username and the password StartOS last set.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: (await grafanaStore.read((s) => s.adminPassword).const(effects))
      ? 'enabled'
      : 'hidden',
  }),

  // execution function
  async ({ effects }) => {
    const password = await grafanaStore.read((s) => s.adminPassword).once()
    if (!password) {
      throw new Error(
        i18n('No Grafana password is stored. Run Reset Admin Password.'),
      )
    }

    return {
      version: '1',
      title: i18n('Grafana Credentials'),
      message: i18n(
        'Sign in to the Grafana Dashboard with these credentials. If you changed the password in Grafana since, this one no longer works; run Reset Admin Password to set a new one.',
      ),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: 'admin',
            masked: false,
            copyable: true,
            qr: false,
            launchable: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
            launchable: false,
          },
        ],
      },
    }
  },
)
