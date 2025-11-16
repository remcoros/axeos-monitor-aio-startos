import { FileHelper, matches } from '@start9labs/start-sdk'
const { object, literals } = matches

export const StoreShape = object({
  axeosVersion: literals('2.11', '2.10'),
})

export const store = FileHelper.json(
  {
    volumeId: 'prometheus',
    subpath: 'etc/prometheus/store.json',
  },
  StoreShape,
)
