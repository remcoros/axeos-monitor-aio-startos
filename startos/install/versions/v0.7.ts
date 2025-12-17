import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v0_7 = VersionInfo.of({
  version: '0.7:1-beta.0',
  releaseNotes: 'Update for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
