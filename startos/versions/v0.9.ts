import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v0_9 = VersionInfo.of({
  version: '0.9:1.0',
  releaseNotes: { en_US: 'Update to StartOS SDK 1.0.0' },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
