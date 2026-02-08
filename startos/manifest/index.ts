import { setupManifest } from '@start9labs/start-sdk'
import {
  GRAFANA_VERSION,
  JSON_EXPORTER_VERSION,
  PROMETHEUS_VERSION,
} from '../install/versions'

export const manifest = setupManifest({
  id: 'axeos-monitor-aio',
  title: 'AxeOS Monitor',
  license: 'MIT',
  wrapperRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  upstreamRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  supportSite: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  marketingSite: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  docsUrl:
    'https://github.com/remcoros/axeos-monitor-aio-startos/blob/main/instructions.md',
  donationUrl: 'https://github.com/remcoros/',
  description: {
    short: {
      en_US: 'AxeOS Monitor (all in one)',
      es_ES: 'Monitor de AxeOS (todo en uno)',
      de_DE: 'AxeOS Monitor (All-in-One)',
      pl_PL: 'AxeOS Monitor (wszystko w jednym)',
      fr_FR: "AxeOS Monitor (tout-en-un)",
    },
    long: {
      en_US:
        'An all-in-one monitoring solution for AxeOS, combining Grafana, Prometheus, and JSON Exporter.',
      es_ES:
        'Una solución de monitoreo todo en uno para AxeOS, que combina Grafana, Prometheus y JSON Exporter.',
      de_DE:
        'Eine All-in-One-Überwachungslösung für AxeOS, die Grafana, Prometheus und JSON Exporter kombiniert.',
      pl_PL:
        'Kompleksowe rozwiązanie monitorowania wszystko w jednym dla AxeOS, łączące Grafana, Prometheus i JSON Exporter.',
      fr_FR:
        'Une solution de surveillance tout-en-un pour AxeOS, combinant Grafana, Prometheus et JSON Exporter.',
    },
  },
  volumes: ['grafana', 'prometheus'],
  images: {
    grafana: {
      source: {
        dockerTag: 'grafana/grafana:' + GRAFANA_VERSION,
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
    prometheus: {
      source: {
        dockerTag: 'prom/prometheus:v' + PROMETHEUS_VERSION,
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
    'json-exporter': {
      source: {
        dockerTag:
          'prometheuscommunity/json-exporter:v' + JSON_EXPORTER_VERSION,
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  dependencies: {},
})
