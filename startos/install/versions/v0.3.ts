import { VersionInfo } from '@start9labs/start-sdk'

export const v0_3 = VersionInfo.of({
  version: '0.3:1.0',
  releaseNotes: 'Update to latest StartOS SDK and prometheus to v3.7.3',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
