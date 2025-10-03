import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

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
      arch: architectures,
      source: {
        dockerTag: 'grafana/grafana:12.2.0',
      },
    } as SDKImageInputSpec,
    prometheus: {
      arch: architectures,
      source: {
        dockerTag: 'prom/prometheus:v3.5.0',
      },
    } as SDKImageInputSpec,
    'json-exporter': {
      arch: architectures,
      source: {
        dockerTag: 'prometheuscommunity/json-exporter:v0.7.0',
      },
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch: architectures,
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
