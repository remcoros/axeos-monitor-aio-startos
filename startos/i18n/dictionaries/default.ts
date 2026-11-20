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
  'Bitaxe IP Addresses': 200,
  "One entry per miner, as shown on its screen or in your router's client list. Reserve each address on your router: a miner whose address changes starts a new history.": 201,
  'AxeOS (ESP-Miner) Version': 202,
  "Picks the dashboard and metrics that match your miners' firmware. Each miner shows its AxeOS version on its own web page. Changing this restarts the service.\n- >= 2.11.x: miners on AxeOS 2.11 or newer\n- <= 2.10.x: miners on AxeOS 2.10 or older": 203,
  'Scrape Interval': 204,
  'Shorter intervals record more detail and grow the database faster.': 205,
  'Configure AxeOS Monitor': 206,
  'Choose the miners to monitor, the AxeOS version they run, and how often to read them.': 207,
  'Must be a valid IPv4 address (e.g. 192.168.1.100)': 208,
  'Configuration Saved': 209,
  'The service is restarting to load the dashboard for the selected AxeOS version.': 210,
  'Start the service to begin collecting metrics.': 211,

  // actions/reloadPrometheusConfig.ts
  'Reload Prometheus Config': 300,
  'Reload the Prometheus configuration.': 301,
  'Prometheus Configuration': 302,
  'Prometheus reloaded its configuration.': 303,
  'Prometheus is not running. The new configuration will be used the next time it starts.': 304,
  'Prometheus refused to reload and is still running its previous configuration. Check the service logs.': 305,

  // actions/resetGrafanaAdminPassword.ts
  'New Admin Password': 400,
  'The new password for the Grafana admin user. Minimum 4 characters.': 401,
  'Password must be at least 4 characters': 402,
  'Reset Admin Password': 403,
  'Resets the Grafana admin user password. Takes effect immediately.': 404,
  'This will immediately overwrite the current Grafana admin password.': 405,
  'Grafana admin password has been reset successfully.': 406,
  Success: 407,
  Username: 408,
  Password: 409,

  // init/index.ts
  'Add the IP address of each Bitaxe you want to monitor': 500,
  'Select the AxeOS (ESP-Miner) version your miners run': 501,

  // actions/showGrafanaCredentials.ts
  'Grafana Credentials': 600,
  'Show the Grafana admin username and the password StartOS last set.': 601,
  'No Grafana password is stored. Run Reset Admin Password.': 602,
  'Sign in to the Grafana Dashboard with these credentials. If you changed the password in Grafana since, this one no longer works; run Reset Admin Password to set a new one.': 603,

  // init/grafanaCredentials.ts
  'Get the Grafana admin password before signing in': 604,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
