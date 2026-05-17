import { sdk } from '../sdk'
import { i18n } from '../i18n'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  newPassword: Value.text({
    name: i18n('New Admin Password'),
    description: i18n(
      'The new password for the Grafana admin user. Minimum 4 characters.',
    ),
    required: true,
    default: null,
    masked: true,
    patterns: [
      {
        regex: '^.{4,}$',
        description: i18n('Password must be at least 4 characters'),
      },
    ],
  }),
})

export const resetGrafanaAdminPassword = sdk.Action.withInput(
  // id
  'reset-grafana-admin-password',

  // metadata
  async ({ effects }) => ({
    name: i18n('Reset Admin Password'),
    description: i18n(
      'Resets the Grafana admin user password. Takes effect immediately.',
    ),
    warning: i18n(
      'This will immediately overwrite the current Grafana admin password.',
    ),
    allowedStatuses: 'any',
    group: 'Maintenance',
    visibility: 'enabled',
  }),

  // input spec
  inputSpec,

  // get input (prefill)
  async ({ effects }) => null,

  // execution function
  async ({ effects, input }) => {
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'grafana' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'grafana',
        subpath: '/var/lib/grafana',
        mountpoint: '/var/lib/grafana',
        readonly: false,
        type: 'directory',
      }),
      'reset-grafana-admin-password',
      async (subc) => {
        await subc.execFail(
          [
            'grafana-cli',
            '--homepath',
            '/usr/share/grafana',
            'admin',
            'reset-admin-password',
            input.newPassword,
          ],
        )
      },
    )

    return {
      version: '1',
      title: i18n('Success'),
      message: i18n('Grafana admin password has been reset successfully.'),
      result: null,
    }
  },
)
