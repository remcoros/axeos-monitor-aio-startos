import { matches } from '@start9labs/start-sdk'

const { object, string, arrayOf, number } = matches

export const ScrapeConfigShape = object({
  scrape_configs: arrayOf(
    object({
      job_name: string,
      scrape_interval: string.optional(),
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

export type ScrapeConfigType = typeof ScrapeConfigShape._TYPE
