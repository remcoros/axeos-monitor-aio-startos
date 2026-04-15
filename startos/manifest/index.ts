import { setupManifest } from '@start9labs/start-sdk'
import {
  GRAFANA_VERSION,
  JSON_EXPORTER_VERSION,
  PROMETHEUS_VERSION,
} from '../versions'

export const manifest = setupManifest({
  id: 'axeos-monitor-aio',
  title: 'AxeOS Monitor',
  license: 'MIT',
  packageRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  upstreamRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  marketingUrl: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  docsUrls: [
    'https://github.com/remcoros/axeos-monitor-aio-startos/blob/main/instructions.md',
  ],
  donationUrl: 'https://github.com/remcoros/',
  description: {
    short: {
      en_US: 'AxeOS Monitor - monitor all your Bitaxes',
      es_ES: 'AxeOS Monitor - monitorea todos tus Bitaxes',
      de_DE: 'AxeOS Monitor - überwache alle deine Bitaxes',
      pl_PL: 'AxeOS Monitor - monitoruj wszystkie swoje Bitaxe',
      fr_FR: 'AxeOS Monitor - surveillez tous vos Bitaxes',
    },
    long: {
      en_US:
        'An all-in-one monitoring solution for AxeOS (Bitaxe), combining Grafana, Prometheus, and JSON Exporter.',
      es_ES:
        'Una solución de monitoreo todo en uno para AxeOS (Bitaxe), que combina Grafana, Prometheus y JSON Exporter.',
      de_DE:
        'Eine All-in-One-Überwachungslösung für AxeOS (Bitaxe), die Grafana, Prometheus und JSON Exporter kombiniert.',
      pl_PL:
        'Kompleksowe rozwiązanie monitorowania wszystko w jednym dla AxeOS (Bitaxe), łączące Grafana, Prometheus i JSON Exporter.',
      fr_FR:
        'Une solution de surveillance tout-en-un pour AxeOS (Bitaxe), combinant Grafana, Prometheus et JSON Exporter.',
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
