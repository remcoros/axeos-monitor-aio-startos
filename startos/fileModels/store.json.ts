import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const StoreShape = z.object({
  axeosVersion: z.union([z.literal('2.11'), z.literal('2.10')]),
})

export const store = FileHelper.json(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/store.json',
  },
  StoreShape,
)
