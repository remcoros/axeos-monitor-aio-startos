import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const grafanaStore = FileHelper.json(
  { base: sdk.volumes.grafana, subpath: 'store.json' },
  z.looseObject({
    // The password StartOS last set; one changed in Grafana itself is not seen here.
    adminPassword: z.string().optional().catch(undefined),
  }),
)
