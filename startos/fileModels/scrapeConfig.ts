import { z } from '@start9labs/start-sdk'

export const ScrapeConfigShape = z.object({
  scrape_configs: z.array(
    z.object({
      job_name: z.string(),
      scrape_interval: z.string().optional(),
      metrics_path: z.string(),
      params: z.object({
        module: z.array(z.string()),
      }),
      static_configs: z.array(
        z.object({
          targets: z.array(z.string()),
        }),
      ),
      relabel_configs: z.array(
        z.object({
          source_labels: z.array(z.string()).optional(),
          regex: z.string().optional(),
          target_label: z.string(),
          replacement: z.string().optional(),
        }),
      ),
    }),
  ),
})

export type ScrapeConfigType = z.infer<typeof ScrapeConfigShape>
