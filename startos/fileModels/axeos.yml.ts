import { FileHelper } from '@start9labs/start-sdk'
import { ScrapeConfigShape } from './scrapeConfig'

export const axeosConfig = FileHelper.yaml(
  {
    volumeId: 'prometheus',
    subpath: 'etc/prometheus/scrape_configs.d/axeos.yml',
  },
  ScrapeConfigShape,
)
