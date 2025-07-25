<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

# AxeOS Monitor (all in one) for StartOS

AxeOS Monitor (all in one) for StartOS provides a complete monitoring solution for your Bitaxes. It uses Grafana OSS, Prometheus, and JSON Exporter to collect metrics.
It includes a preconfigured dashboard for monitoring your Bitaxes. This package is designed to be easy to install and use, providing a comprehensive monitoring solution for your Bitaxes.

This repository creates the `s9pk` package that is installed to run AxeOS Monitor on [StartOS](https://github.com/Start9Labs/start-os/). Learn more about service packaging in the [Developer Docs](https://start9.com/latest/developer-docs/).

<p align="center">
  <img src="axeos-monitor-preview.png" alt="Project Logo" width="100%">
</p>

## Dependencies

Install the system dependencies below to build this project by following the instructions in the provided links. You can also find detailed steps to setup your environment in the service packaging [documentation](https://docs.start9.com/latest/developer-docs/packaging#development-environment).

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [make](https://www.gnu.org/software/make/)
- [start-cli](https://github.com/Start9Labs/start-os/)

## Cloning

Clone the service package repository locally.

```
git clone git@github.com:remcoros/axeos-monitor-aio-startos.git
cd axeos-monitor-aio-startos
```

## Building

To build the service as a universal package, run the following command:

```
make
```

## Installing (on StartOS)

Before installation, define `host: https://server-name.local` in your `~/.startos/config.yaml` config file then run the following commands to determine successful install:

> Change server-name.local to your Start9 server address

```
start-cli auth login
#Enter your StartOS password
make install
```

**Tip:** You can also install the axeos-monitor-aio.s9pk by sideloading it under the **StartOS > System > Sideload a Service** section.

## Verify Install

Go to your StartOS Services page, select **AxeOS Monitor**, configure and start the service.

**Done!**
