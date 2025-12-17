import { store } from './fileModels/store.json'
import { sdk } from './sdk'
import { uiPort } from './utils'
import { exec } from 'child_process'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting AxeOS Monitor...')

  const axeosVersion =
    (await store.read().const(effects))?.axeosVersion ?? '2.11'

  const grafanaSubcontainer = await sdk.SubContainer.of(
    effects,
    {
      imageId: 'grafana',
    },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'grafana',
        subpath: '/var/lib/grafana',
        mountpoint: '/var/lib/grafana',
        readonly: false,
        type: 'directory',
      })
      .mountVolume({
        volumeId: 'grafana',
        subpath: '/etc/grafana/provisioning',
        mountpoint: '/etc/grafana/provisioning',
        readonly: false,
        type: 'directory',
      })
      .mountVolume({
        volumeId: 'grafana',
        subpath: '/etc/grafana/dashboards',
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

  const prometheusSubcontainer = await sdk.SubContainer.of(
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

  const jsonExporterSubcontainer = await sdk.SubContainer.of(
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

  // Fix file permissions
  exec(`chown -R 472:0 ${grafanaSubcontainer.rootfs}/assets`)
  exec(`chown -R 472:0 ${grafanaSubcontainer.rootfs}/var/lib/grafana`)
  exec(`chown -R 472:0 ${grafanaSubcontainer.rootfs}/etc/grafana`)

  exec(`chown -R nobody:0 ${prometheusSubcontainer.rootfs}/prometheus`)
  exec(`chown -R nobody:0 ${prometheusSubcontainer.rootfs}/etc/prometheus`)
  exec(`chmod g+w ${prometheusSubcontainer.rootfs}/prometheus`)

  exec(`chown -R nobody:0 ${jsonExporterSubcontainer.rootfs}/assets`)
  exec(`chown -R nobody:0 ${jsonExporterSubcontainer.rootfs}/config`)
  exec(`chmod g+w ${jsonExporterSubcontainer.rootfs}/config`)

  // grafana provisioning
  const provisioningDir = `${grafanaSubcontainer.rootfs}/etc/grafana/provisioning`

  exec(
    `mkdir -p ` +
      `${provisioningDir}/datasources ` +
      `${provisioningDir}/dashboards ` +
      `${provisioningDir}/plugins ` +
      `${provisioningDir}/alerting`,
  )

  exec(
    `cp -r ${grafanaSubcontainer.rootfs}/assets/provisioning/datasources ` +
      `${provisioningDir}/datasources`,
  )
  exec(
    `cp -r ${grafanaSubcontainer.rootfs}/assets/provisioning/dashboards ` +
      `${provisioningDir}/dashboards`,
  )
  exec(
    `cp ${grafanaSubcontainer.rootfs}/assets/dashboards/axeos-${axeosVersion}.json ` +
      `${grafanaSubcontainer.rootfs}/etc/grafana/dashboards/axeos.json`,
  )

  return sdk.Daemons.of(effects)
    .addDaemon('json-exporter', {
      subcontainer: jsonExporterSubcontainer,
      exec: {
        command: [
          '/bin/json_exporter',
          `--config.file=/config/config-${axeosVersion}.yml`,
          '--log.level=warn',
        ],
        runAsInit: true,
        env: {},
      },
      ready: {
        display: 'JSON Exporter',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, 7979, {
            successMessage: 'JSON Exporter is ready',
            errorMessage: 'JSON Exporter is unreachable',
          }),
      },
      requires: [],
    })
    .addDaemon('prometheus', {
      subcontainer: prometheusSubcontainer,
      exec: {
        command: [
          '/bin/prometheus',
          '--config.file=/etc/prometheus/prometheus.yml',
          '--storage.tsdb.path=/prometheus',
          '--web.enable-lifecycle', // Enable the /-/reload endpoint
          '--log.level=warn',
        ],
        runAsInit: true,
        env: {},
      },
      ready: {
        display: 'Prometheus',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, 9090, {
            successMessage: 'Prometheus is ready',
            errorMessage: 'Prometheus is unreachable',
          }),
      },
      requires: ['json-exporter'],
    })
    .addDaemon('grafana', {
      subcontainer: grafanaSubcontainer,
      exec: {
        command: ['/run.sh'], // The command to start the daemon.
        runAsInit: true,
        env: {
          GF_ANALYTICS_REPORTING_ENABLED: 'false', // Disable analytics reporting
          GF_ANALYTICS_CHECK_FOR_UPDATES: 'false', // Disable update checks
          GF_ANALYTICS_CHECK_FOR_PLUGIN_UPDATES: 'false', // Disable update checks
          GF_ANALYTICS_FEEDBACK_LINKS_ENABLED: 'false', // Disable feedback links
          GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH:
            '/etc/grafana/dashboards/axeos.json', // Set the default home dashboard
          GF_LOG_LEVEL: 'warn',
        },
      },
      ready: {
        display: 'Grafana', // If null, the health check will NOT be displayed to the user. If provided, this string will be the name of the health check and displayed to the user.
        // The function below determines the health status of the daemon.
        gracePeriod: 60000,
        fn: () =>
          sdk.healthCheck.checkWebUrl(
            effects,
            'http://axeos-monitor-aio.startos:' + uiPort,
            {
              successMessage: 'Grafana is ready',
              errorMessage: 'Grafana is unreachable',
            },
          ),
      },
      requires: ['prometheus', 'json-exporter'],
    })
})
