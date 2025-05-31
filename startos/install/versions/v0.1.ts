import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v0_1 = VersionInfo.of({
  version: '0.1:0.1',
  releaseNotes: 'Initial release of AxeOS Monitor for StartOS.',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
