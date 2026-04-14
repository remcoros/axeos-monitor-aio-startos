import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v1_0_0 = VersionInfo.of({
  version: '1.0.0:1-beta.1',
  releaseNotes: {
    en_US:
      'Update to StartOS SDK 1.0.0, Grafana 12.4.3, Prometheus 3.11.2, fix provisioning race condition on startup',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
