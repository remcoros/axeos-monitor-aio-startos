import { VersionInfo } from '@start9labs/start-sdk'

export const v0_2 = VersionInfo.of({
  version: '0.2:1.0',
  releaseNotes: 'Update grafana to 12.2.1 and prometheus to v3.7.1.',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
