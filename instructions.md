# AxeOS Monitor Instructions

AxeOS Monitor bundles Grafana, Prometheus, and JSON Exporter into a single service for monitoring AxeOS (ESP-Miner) Bitaxe miners. A pre-configured Grafana dashboard is included. No manual Grafana setup is needed.

## First-time setup

1. Open the **Configure** action and enter the IP addresses of your Bitaxe miners (one per entry), select your AxeOS version, and save.
2. The service will start collecting metrics immediately.
3. Open the **Grafana Dashboard** interface. You will be prompted to create an account on first visit.

## Adding or removing miners

Run the **Configure** action at any time to add or remove IP addresses. Changes take effect immediately without restarting.

## Customize the default Dashboard

AxeOS Monitor comes with a default dashboard that already has some useful widgets. You can customize this dashboard by adding or removing widgets, or by creating your own custom widgets.

Note that the default dashboard cannot be saved and serves as a template for creating your own dashboards. This default dashboard will be reset and overwritten when you upgrade or reinstall AxeOS Monitor.

If you want to customize the default dashboard, you should save it as a new dashboard. To do this, click on the "Edit" button in the top right corner of the dashboard, then "Save as copy". You will be prompted to enter a name for your new dashboard. Once you have saved your new dashboard, you can customize it as you like.

## Set your home dashboard

To set your newly copied dashboard as your default home dashboard, go to your profile (click the icon in the top right of the screen). Here you can select your new dashboard from the "Home Dashboard" dropdown menu. This will set your new dashboard as the default dashboard that is displayed when you log in.

## Prometheus

The **Prometheus** interface exposes raw metrics. This is intended for advanced use or integration with other tools.
