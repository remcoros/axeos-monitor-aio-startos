import { VersionGraph } from '@start9labs/start-sdk'
import { v1_0_0 } from './v1.0.0'

export const versionGraph = VersionGraph.of({
  current: v1_0_0,
  other: [],
})

export const GRAFANA_VERSION = '12.4.3'
export const PROMETHEUS_VERSION = '3.11.2'
export const JSON_EXPORTER_VERSION = '0.7.0'
