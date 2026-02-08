import { FileHelper } from '@start9labs/start-sdk'
import { ScrapeConfigShape } from './scrapeConfig'
import { sdk } from '../sdk'

export const axeosConfig = FileHelper.yaml(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/scrape_configs.d/axeos.yml',
  },
  ScrapeConfigShape,
)
