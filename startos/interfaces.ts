import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // Grafana OSS interface
  const uiMulti = sdk.MultiHost.of(effects, 'ui')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })

  const ui = sdk.createInterface(effects, {
    name: 'Grafana Dashboard',
    id: 'ui',
    description: 'Grafana OSS Web Interface',
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    query: {},
  })

  const uiReceipt = await uiMultiOrigin.export([ui])

  // Prometheus interface
  const prometheusMulti = sdk.MultiHost.of(effects, 'prometheus')
  const prometheusMultiOrigin = await prometheusMulti.bindPort(9090, {
    protocol: 'http',
  })
  const prometheus = sdk.createInterface(effects, {
    name: 'Prometheus',
    id: 'prometheus',
    description: 'Prometheus raw metrics browser',
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    query: {},
  })
  const prometheusReceipt = await prometheusMultiOrigin.export([prometheus])

  return [uiReceipt, prometheusReceipt]
})
