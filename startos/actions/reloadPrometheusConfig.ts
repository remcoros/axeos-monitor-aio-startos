import { manifest } from '../manifest'
import { sdk } from '../sdk'

export const reloadPrometheusConfig = sdk.Action.withoutInput(
  // id
  'reload-prometheus-config',

  // metadata
  async ({ effects }) => {
    //const conf = await store.read().const(effects)

    return {
      name: 'Reload Prometheus Config',
      description: 'Reload the Prometheus configuration.',
      warning: null,
      allowedStatuses: 'any',
      group: 'Maintenance',
      visibility: 'hidden',
    }
  },

  // execution function
  async ({ effects }) => {
    const status = await sdk.getStatus(effects, { packageId: manifest.id })

    if (status.health.prometheus.result === 'success') {
      await reloadPrometheus()
      return {
        version: '1',
        title: 'Success',
        message: 'Prometheus configuration reloaded successfully.',
        result: null,
      }
    }

    return {
      version: '1',
      title: 'Success',
      message: 'Prometheus is not running, no action taken.',
      result: null,
    }
  },
)

const reloadPrometheus = async () => {
  try {
    const response = await fetch('http://127.0.0.1:9090/-/reload', {
      method: 'POST',
    })

    if (response.ok) {
      console.log('Prometheus config reloaded successfully.')
    } else {
      console.error(
        `Failed to reload config: ${response.status} ${response.statusText}`,
      )
    }
  } catch (error) {
    console.error('Error reloading Prometheus:', error)
  }
}
