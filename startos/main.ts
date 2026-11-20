import { grafanaStore } from './fileModels/grafanaStore.json'
import { store } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { jsonExporterPort, prometheusPort, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  // Reading with `const` restarts main when the selected version changes, so the
  // dashboard and exporter module below are re-picked for it.
  const axeosVersion =
    (await store.read().const(effects))?.axeosVersion ?? '2.11'
  const adminPassword = await grafanaStore.read((s) => s.adminPassword).once()

  const grafanaSubcontainer = await sdk.SubContainer.eager(
    effects,
    {
      imageId: 'grafana',
    },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'grafana',
        subpath: 'var/lib/grafana',
        mountpoint: '/var/lib/grafana',
        readonly: false,
        type: 'directory',
      })
      .mountVolume({
        volumeId: 'grafana',
        subpath: 'etc/grafana/provisioning',
        mountpoint: '/etc/grafana/provisioning',
        readonly: false,
        type: 'directory',
      })
      .mountVolume({
        volumeId: 'grafana',
        subpath: 'etc/grafana/dashboards',
        mountpoint: '/etc/grafana/dashboards',
        readonly: false,
        type: 'directory',
      })
      .mountAssets({
        subpath: 'grafana',
        mountpoint: '/assets',
        type: 'directory',
      }),
    'grafana',
  )

  const prometheusSubcontainer = await sdk.SubContainer.eager(
    effects,
    {
      imageId: 'prometheus',
    },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'prometheus',
        subpath: 'prometheus',
        mountpoint: '/prometheus',
        readonly: false,
        type: 'directory',
      })
      .mountVolume({
        volumeId: 'prometheus',
        subpath: 'etc/prometheus',
        mountpoint: '/etc/prometheus',
        readonly: false,
        type: 'directory',
      }),
    'prometheus',
  )

  const jsonExporterSubcontainer = await sdk.SubContainer.eager(
    effects,
    {
      imageId: 'json-exporter',
    },
    sdk.Mounts.of().mountAssets({
      subpath: 'json-exporter',
      mountpoint: '/config',
      type: 'directory',
    }),
    'json-exporter',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('grafana-setup', {
      subcontainer: grafanaSubcontainer,
      exec: {
        command: [
          'sh',
          '-euc',
          [
            'mkdir -p /etc/grafana/provisioning/datasources /etc/grafana/provisioning/dashboards' +
              ' /etc/grafana/provisioning/plugins /etc/grafana/provisioning/alerting' +
              ' /etc/grafana/dashboards',
            'cp -r /assets/provisioning/datasources/. /etc/grafana/provisioning/datasources/',
            'cp -r /assets/provisioning/dashboards/. /etc/grafana/provisioning/dashboards/',
            `cp /assets/dashboards/axeos-${axeosVersion}.json /etc/grafana/dashboards/axeos.json`,
            'chown -R 472:0 /var/lib/grafana /etc/grafana/provisioning /etc/grafana/dashboards',
          ].join('\n'),
        ],
        user: 'root',
      },
      requires: [],
    })
    .addOneshot('prometheus-setup', {
      subcontainer: prometheusSubcontainer,
      exec: {
        command: [
          'chown',
          '-R',
          'nobody:nobody',
          '/prometheus',
          '/etc/prometheus',
        ],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('json-exporter', {
      subcontainer: jsonExporterSubcontainer,
      exec: {
        command: sdk.useEntrypoint([
          `--config.file=/config/config-${axeosVersion}.yml`,
          '--log.level=warn',
        ]),
        runAsInit: true,
      },
      ready: {
        display: i18n('JSON Exporter'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, jsonExporterPort, {
            successMessage: i18n('JSON Exporter is ready'),
            errorMessage: i18n('JSON Exporter is unreachable'),
          }),
      },
      requires: [],
    })
    .addDaemon('prometheus', {
      subcontainer: prometheusSubcontainer,
      exec: {
        command: sdk.useEntrypoint([
          '--config.file=/etc/prometheus/prometheus.yml',
          '--storage.tsdb.path=/prometheus',
          // Serves POST /-/reload, which the Configure action calls.
          '--web.enable-lifecycle',
          '--log.level=warn',
        ]),
        runAsInit: true,
      },
      ready: {
        display: 'Prometheus',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, prometheusPort, {
            successMessage: i18n('Prometheus is ready'),
            errorMessage: i18n('Prometheus is unreachable'),
          }),
      },
      requires: ['prometheus-setup', 'json-exporter'],
    })
    .addDaemon('grafana', {
      subcontainer: grafanaSubcontainer,
      exec: {
        command: sdk.useEntrypoint(),
        runAsInit: true,
        env: {
          GF_ANALYTICS_REPORTING_ENABLED: 'false',
          GF_ANALYTICS_CHECK_FOR_UPDATES: 'false',
          GF_ANALYTICS_CHECK_FOR_PLUGIN_UPDATES: 'false',
          GF_ANALYTICS_FEEDBACK_LINKS_ENABLED: 'false',
          GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH:
            '/etc/grafana/dashboards/axeos.json',
          GF_LOG_LEVEL: 'warn',
          ...(adminPassword && { GF_SECURITY_ADMIN_PASSWORD: adminPassword }),
        },
      },
      ready: {
        display: 'Grafana',
        // Grafana migrates its database on first start after an upgrade.
        gracePeriod: 60000,
        fn: () =>
          sdk.healthCheck.checkWebUrl(effects, `http://127.0.0.1:${uiPort}`, {
            successMessage: i18n('Grafana is ready'),
            errorMessage: i18n('Grafana is unreachable'),
          }),
      },
      requires: ['grafana-setup', 'prometheus', 'json-exporter'],
    })
})
