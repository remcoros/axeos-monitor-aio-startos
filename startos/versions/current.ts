import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:8',
  releaseNotes: {
    en_US:
      'Updated Grafana to 13.2.4, Prometheus to 3.15.1 and JSON Exporter to 0.8.0. Stops trusting certificates from a compromised certificate authority (eMudhra).',
    es_ES:
      'Grafana actualizado a 13.2.4, Prometheus a 3.15.1 y JSON Exporter a 0.8.0. Deja de confiar en los certificados de una autoridad de certificación comprometida (eMudhra).',
    de_DE:
      'Grafana auf 13.2.4, Prometheus auf 3.15.1 und JSON Exporter auf 0.8.0 aktualisiert. Vertraut Zertifikaten einer kompromittierten Zertifizierungsstelle (eMudhra) nicht mehr.',
    pl_PL:
      'Zaktualizowano Grafanę do 13.2.4, Prometheusa do 3.15.1 i JSON Exporter do 0.8.0. Przestaje ufać certyfikatom przejętego urzędu certyfikacji (eMudhra).',
    fr_FR:
      "Grafana mis à jour vers 13.2.4, Prometheus vers 3.15.1 et JSON Exporter vers 0.8.0. Ne fait plus confiance aux certificats d'une autorité de certification compromise (eMudhra).",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
