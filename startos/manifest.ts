import { setupManifest } from '@start9labs/start-sdk'
import {
  GRAFANA_VERSION,
  JSON_EXPORTER_VERSION,
  PROMETHEUS_VERSION,
} from './install/versions'

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
    short: 'AxeOS Monitor (all in one)',
    long: 'An all-in-one monitoring solution for AxeOS, combining Grafana, Prometheus, and JSON Exporter.',
  },
  volumes: ['grafana', 'prometheus'],
  images: {
    grafana: {
      source: {
        dockerTag: 'grafana/grafana:' + GRAFANA_VERSION,
      },
    },
    prometheus: {
      source: {
        dockerTag: 'prom/prometheus:v' + PROMETHEUS_VERSION,
      },
    },
    'json-exporter': {
      source: {
        dockerTag:
          'prometheuscommunity/json-exporter:v' + JSON_EXPORTER_VERSION,
      },
    },
  },
  hardwareRequirements: {
    arch: ['x86_64', 'aarch64'],
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
