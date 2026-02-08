export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'JSON Exporter': 1,
  'JSON Exporter is ready': 2,
  'JSON Exporter is unreachable': 3,
  'Prometheus is ready': 4,
  'Prometheus is unreachable': 5,
  'Grafana is ready': 6,
  'Grafana is unreachable': 7,

  // interfaces.ts
  'Grafana Dashboard': 100,
  'Grafana OSS Web Interface': 101,
  'Prometheus raw metrics browser': 102,

  // actions/config.ts
  'AxeOS IP Address(es)': 200,
  'IP Address(es) of the AxeOS instance(s) to monitor. One IP address per line.': 201,
  'AxeOS (ESP-Miner) Version': 202,
  'The version of AxeOS (ESP-Miner) you are running.': 203,
  'Scrape Interval': 204,
  'How often to scrape for metrics. Default is 15 seconds.': 205,
  'Configure AxeOS Monitor': 206,
  'Configure AxeOS Monitor settings': 207,

  // actions/reloadPrometheusConfig.ts
  'Reload Prometheus Config': 300,
  'Reload the Prometheus configuration.': 301,
  'Success': 302,
  'Prometheus configuration reloaded successfully.': 303,
  'Prometheus is not running, no action taken.': 304,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict