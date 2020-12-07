# [CodeceptJS](https://codecept.io/) Test Tool Starter

This is CodeceptJS Test Tool Starter based on [Webdrvier Helper](https://codecept.io/webdriver/).

## Prerequisites

- Node.js >= 12
- Yarn
- Docker
- docker-compose

## Features

- CodeceptJS full features on webdriver helper
- CodeceptUI: Graphical Test Runner for CodeceptJS


## Pre-installation

### Selenoid
In this project, `docker-compose.yml` builds docker containers as below:

- selenoid (Selenium in Doocker)
- selenoid-ui
- selenoid-video-recorder

To run containers altogether:

(1) Make sure you have recent [Docker](https://www.docker.com/get-started) and [docker-compose](https://docs.docker.com/compose/install/) versions installed

(2) On Linux or Mac run those containers above:
```
$ docker-compose up -d
```

### Dependencies

To install all packages:

```
$ yarn
```

## Usage

Make sure you have right settings inclduing URL, TEST_PATH..etc in `.env` file.

To run CodeceptJS:

```
$ yarn e2e:all
```

To start CodeceptUI in application mode:

```
$ yarn e2e:app
```

To start CodeceptUI in web mode:

```
$ yarn e2e:web
```

## Environment Variables

| **Command**   | **Description**
|:--------------|:---------------------------------------------------------------
| `PROJECT_NAME`| The title of E2E Test
| `HEADLESS`    | Set Headless mode (true/false)
| `URL`         | Set test URL
| `TEST_PATH`   | Set root path of tests
| `OUTPUT_PATH` | Set the path of ouput (video, screenshots, logs)












