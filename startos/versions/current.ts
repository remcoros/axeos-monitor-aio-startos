import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:9',
  releaseNotes: {
    en_US:
      'Updated Grafana to 13.3.0 and Start SDK to 3.1.1. All three services now use upstream container images directly. Fixed missing rejected share counts in the dashboard.',
    es_ES:
      'Grafana actualizado a 13.3.0 y Start SDK a 3.1.1. Los tres servicios ahora usan directamente las imágenes de contenedor originales. Corregido el recuento de shares rechazados que faltaba en el panel.',
    de_DE:
      'Grafana auf 13.3.0 und Start SDK auf 3.1.1 aktualisiert. Alle drei Dienste verwenden jetzt direkt die ursprünglichen Container-Images. Fehlende Anzahl abgelehnter Shares im Dashboard behoben.',
    pl_PL:
      'Zaktualizowano Grafanę do 13.3.0 i Start SDK do 3.1.1. Wszystkie trzy usługi korzystają teraz bezpośrednio z obrazów kontenerów dostarczanych przez ich autorów. Naprawiono brak liczby odrzuconych udziałów na pulpicie.',
    fr_FR:
      'Grafana mis à jour vers 13.3.0 et Start SDK vers 3.1.1. Les trois services utilisent désormais directement les images de conteneur officielles. Correction de l’absence du nombre de shares rejetés dans le tableau de bord.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
