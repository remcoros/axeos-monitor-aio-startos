import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'axeos-monitor-aio',
  title: 'AxeOS Monitor',
  license: 'MIT',
  wrapperRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  upstreamRepo: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  supportSite: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  marketingSite: 'https://github.com/remcoros/axeos-monitor-aio-startos',
  donationUrl: 'https://github.com/remcoros/',
  description: {
    short: 'AxeOS Monitor (all in one)',
    long: 'An all-in-one monitoring solution for AxeOS, combining Grafana, Prometheus, and JSON Exporter.',
  },
  volumes: ['grafana', 'prometheus'],
  images: {
    grafana: {
      arch: ['x86_64'],
      source: {
        dockerTag: 'grafana/grafana-oss:12.0.1',
      },
    },
    prometheus: {
      arch: ['x86_64'],
      source: {
        dockerTag: 'prom/prometheus:v3.4.1',
      },
    },
    'json-exporter': {
      arch: ['x86_64'],
      source: {
        dockerTag: 'prometheuscommunity/json-exporter:v0.7.0',
      },
    },
  },
  hardwareRequirements: {},
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
