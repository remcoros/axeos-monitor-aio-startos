import { FileHelper, matches } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, arrayOf } = matches

const shape = object({
  global: object({
    scrape_interval: string,
  }),
  scrape_config_files: arrayOf(string).optional(),
  scrape_configs: arrayOf(
    object({
      job_name: string,
      metrics_path: string,
      params: object({
        module: arrayOf(string),
      }),
      static_configs: arrayOf(
        object({
          targets: arrayOf(string),
        }),
      ),
      relabel_configs: arrayOf(
        object({
          source_labels: arrayOf(string).optional(),
          regex: string.optional(),
          target_label: string,
          replacement: string.optional(),
        }),
      ),
    }),
  ),
})

export const prometheusConfig = FileHelper.yaml(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/prometheus.yml',
  },
  shape,
)

export type PrometheusConfigType = typeof shape._TYPE
export const defaultPrometheusConfig: PrometheusConfigType = {
  global: {
    scrape_interval: '15s',
  },
  scrape_config_files: ['/etc/prometheus/scrape_configs.d/*.yml'],
  scrape_configs: [],
}
