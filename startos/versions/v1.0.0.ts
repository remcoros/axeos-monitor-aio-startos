import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v1_0_0 = VersionInfo.of({
  version: '1.0.0:2',
  releaseNotes: {
    en_US: 'Add Reset Admin Password action for Grafana',
    es_ES: 'Añadir acción de restablecer contraseña de administrador de Grafana',
    de_DE: 'Aktion zum Zurücksetzen des Grafana-Admin-Passworts hinzugefügt',
    pl_PL: 'Dodano akcję resetowania hasła administratora Grafana',
    fr_FR: 'Ajout de l\'action de réinitialisation du mot de passe administrateur Grafana',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
