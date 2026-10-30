# Updating the upstream versions

This package pins three unmodified upstream images, each released on its own schedule, by tag in `startos/manifest/index.ts` (`images[<id>].source.dockerTag`).

A fourth version matters and is not an image: the AxeOS (ESP-Miner) firmware release the scrape config and dashboard are written against.

## Determining the upstream version

- **Grafana** ([grafana/grafana](https://github.com/grafana/grafana)) — image `grafana/grafana`, pinned as `grafana/grafana:<version>` (no leading `v`):

  ```sh
  gh release view -R grafana/grafana --json tagName -q .tagName
  ```

  Stay on the latest stable OSS release; skip `-beta`, `-preview` and `-security` tags.

- **Prometheus** ([prometheus/prometheus](https://github.com/prometheus/prometheus)) — image `prom/prometheus`, pinned as `prom/prometheus:v<version>` (the tag keeps the `v`):

  ```sh
  gh release view -R prometheus/prometheus --json tagName -q .tagName
  ```

- **JSON Exporter** ([prometheus-community/json_exporter](https://github.com/prometheus-community/json_exporter)) — image `prometheuscommunity/json-exporter`, pinned as `prometheuscommunity/json-exporter:v<version>` (the tag keeps the `v`):

  ```sh
  gh release view -R prometheus-community/json_exporter --json tagName -q .tagName
  ```

- **AxeOS / ESP-Miner** ([bitaxeorg/ESP-Miner](https://github.com/bitaxeorg/ESP-Miner)) — not an image; it is the firmware whose `/api/system/info` response the exporter parses:

  ```sh
  gh release view -R bitaxeorg/ESP-Miner --json tagName -q .tagName
  ```

  The supported releases are the `2.10` / `2.11` pairs under `assets/`. A new minor release only needs handling if it changes `/api/system/info` — see "Adding an AxeOS release" below.

## Applying the bump

1. Edit the matching `dockerTag` in `startos/manifest/index.ts`.
2. Bump the revision in `startos/versions/current.ts` (`1.0.0:N` → `1.0.0:N+1`) and write release notes in all five locales.
3. `make x86` and install on a test server. A Grafana major bump is the one to watch: it migrates `grafana.db` on first start, and a dashboard exported from an older Grafana can lose panels. Open the AxeOS dashboard and confirm every panel still renders.

## Adding an AxeOS release

Only needed when a release changes the `/api/system/info` payload the exporter reads (`2.11` moved `bestDiff` and `bestSessionDiff` from labels to values, for example). Four edits, all required:

1. `assets/json-exporter/config-<v>.yml` — copy the closest existing config and adjust the JSONPath expressions.
2. `assets/grafana/dashboards/axeos-<v>.json` — export the dashboard from a Grafana running that release. Keep the datasource `uid` as `startosprometheus` and leave `id` null.
3. `startos/fileModels/store.json.ts` — add the literal to the `axeosVersion` union.
4. `startos/actions/config.ts` — add the option to the `axeosVersion` select.

Miss any one of them and the selection falls back to the default without telling the user.
