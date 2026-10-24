import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'axeos-monitor-aio',
  title: 'AxeOS Monitor',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/axeos-monitor-aio-startos',
  upstreamRepo: 'https://github.com/bitaxeorg/ESP-Miner',
  marketingUrl: 'https://bitaxe.org',
  donationUrl: null,
  description: { short, long },
  volumes: ['grafana', 'prometheus'],
  images: {
    grafana: {
      source: {
        dockerBuild: { buildArgs: { IMAGE: 'grafana/grafana:13.2.4' } },
      },
      arch: ['x86_64', 'aarch64'],
    },
    prometheus: {
      source: { dockerTag: 'prom/prometheus:v3.15.1' },
      arch: ['x86_64', 'aarch64'],
    },
    'json-exporter': {
      source: {
        dockerBuild: {
          dockerfile: './Dockerfile.json-exporter',
          buildArgs: { IMAGE: 'prometheuscommunity/json-exporter:v0.8.0' },
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
