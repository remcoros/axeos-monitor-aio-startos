import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v1_0_0 = VersionInfo.of({
  version: '1.0.0:1-beta.1',
  releaseNotes: {
    en_US: 'Initial release of AxeOS Monitor for StartOS 0.4',
    es_ES: 'Lanzamiento inicial de AxeOS Monitor para StartOS 0.4',
    de_DE: 'Erstveröffentlichung von AxeOS Monitor für StartOS 0.4',
    pl_PL: 'Pierwsze wydanie AxeOS Monitor dla StartOS 0.4',
    fr_FR: 'Première version de AxeOS Monitor pour StartOS 0.4',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
