import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:7',
  releaseNotes: {
    en_US:
      'Restarting AxeOS Monitor while it is still starting stops every process of the previous run.',
    es_ES:
      'Reiniciar AxeOS Monitor mientras aún se está iniciando detiene todos los procesos de la ejecución anterior.',
    de_DE:
      'Ein Neustart von AxeOS Monitor, während es noch startet, beendet alle Prozesse des vorherigen Laufs.',
    pl_PL:
      'Ponowne uruchomienie AxeOS Monitor w trakcie uruchamiania zatrzymuje wszystkie procesy poprzedniego uruchomienia.',
    fr_FR:
      "Redémarrer AxeOS Monitor pendant son démarrage arrête tous les processus de l'exécution précédente.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
