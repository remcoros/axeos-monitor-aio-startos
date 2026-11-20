# AxeOS Monitor

Your miners need fixed IP addresses. AxeOS Monitor finds them by address, so reserve one per miner on your router before you start — if an address changes later, that miner's history starts over under the new one.

## Documentation

- [Grafana documentation](https://grafana.com/docs/grafana/latest/) — building dashboards, panels and alerts.
- [PromQL basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) — the query language behind every panel.
- [AxeOS (ESP-Miner)](https://github.com/bitaxeorg/ESP-Miner) — the miner firmware whose status API is read.

## What you get on StartOS

- **A Grafana dashboard** showing hashrate, temperature, power draw, fan speed and share statistics for every miner you list, updated continuously.
- **A metrics database** that keeps the history, so you can look back at last night as easily as at right now.
- **The raw Prometheus interface**, for writing your own queries or pointing other tools at the data.

## Getting set up

1. Open **Configure AxeOS Monitor**. It is waiting for you the moment the service is installed, and nothing else will run until it is done.
2. Add the IP address of each miner, one entry each. You can find a miner's address on its own screen or in your router's client list.
3. Choose the AxeOS version your miners run. Each miner shows its firmware version on its own web page; pick the option that covers it, or the newest one if none does.
4. Leave the scrape interval at 15 seconds unless you have a reason to change it. Shorter means more detail and a larger database.
5. Save, then start the service. Collection begins as soon as it is running.
6. Run **Grafana Credentials** to see the admin password generated for this install, and save it to a password manager.
7. Open the **Grafana Dashboard** interface and sign in with the username `admin` and that password.

The AxeOS dashboard opens automatically once you are signed in.

## Using AxeOS Monitor

### Adding or removing miners

Run **Configure AxeOS Monitor** again at any time. The form comes back filled in with what you set last, so you can add an address, drop one, or change the interval and save. Changes take effect right away — the only setting that restarts the service is the AxeOS version.

### Making the dashboard your own

The AxeOS dashboard is a starting point, and it is replaced every time the service starts — including on updates — so edits to it will not stick. To keep your changes, open the dashboard, click **Edit**, then **Save as copy**, and give it a name. Your copy is yours and is never overwritten.

To open your copy by default, click your profile icon in the top right and pick it from the **Home Dashboard** list.

### Changing or losing your Grafana password

Run **Reset Admin Password**, choose a new one, and it returns the username and password to sign in with. **Grafana Credentials** then shows the new one. If you change the password on Grafana's own profile page instead, Grafana Credentials keeps showing the old one.

### Raw metrics

The **Prometheus** interface exposes the metrics database directly, for your own queries or for other tools. It has no password of its own — anyone who can reach the address can read it, and can also make Prometheus reload its configuration or shut down until StartOS restarts it, so publish it accordingly.

## Limitations

- Only the AxeOS versions offered in the Configure form are supported. A miner on a newer release is still read, but panels for any field the firmware moved will show "No data".
- Miners are identified by IPv4 address. Hostnames and IPv6 addresses are not accepted.
