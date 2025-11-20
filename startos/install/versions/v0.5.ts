import { VersionInfo } from '@start9labs/start-sdk'

export const v0_5 = VersionInfo.of({
  version: '0.5:1.0',
  releaseNotes:
    'Update Grafana to 12.3.0',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
