import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

// the following allows us to build the service for x86 or arm64 specifically
// use: 'make x86' or 'make arm' ('make' will build both)
const BUILD = process.env.BUILD || ''
const arch =
  BUILD === 'x86'
    ? ['x86_64']
    : BUILD === 'arm'
      ? ['aarch64']
      : ['x86_64', 'aarch64']

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
      arch: arch,
      source: {
        dockerTag: 'grafana/grafana-oss:12.0.2',
      },
    } as SDKImageInputSpec,
    prometheus: {
      arch: arch,
      source: {
        dockerTag: 'prom/prometheus:v3.4.1',
      },
    } as SDKImageInputSpec,
    'json-exporter': {
      arch: arch,
      source: {
        dockerTag: 'prometheuscommunity/json-exporter:v0.7.0',
      },
    } as SDKImageInputSpec,
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
