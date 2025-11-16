import { VersionInfo } from '@start9labs/start-sdk'

export const v0_4 = VersionInfo.of({
  version: '0.4:1.0',
  releaseNotes:
    'Update for AxeOS/ESP-Miner 2.11 (and add support for version selection)',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
