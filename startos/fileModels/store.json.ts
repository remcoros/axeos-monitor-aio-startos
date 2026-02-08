import { FileHelper, matches } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
const { object, literals } = matches

export const StoreShape = object({
  axeosVersion: literals('2.11', '2.10'),
})

export const store = FileHelper.json(
  {
    base: sdk.volumes.prometheus,
    subpath: 'etc/prometheus/store.json',
  },
  StoreShape,
)
