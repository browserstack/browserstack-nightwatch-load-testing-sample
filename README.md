# browserstack-nightwatch-load-testing-sample
This repo contains samples for running [Nightwatch](https://nightwatchjs.org/) tests on BrowserStack Load Testing using the BrowserStack CLI.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo `git clone https://github.com/browserstack/browserstack-nightwatch-load-testing-sample.git`.
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as environment variables with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) 
* Use Node.js 20 or later and npm 11.10 or later (`npm install -g npm@latest`). Older npm ignores the seven-day release-age policy in `.npmrc`.
* Run `npm i` to install the dependencies.
* Open the browserstack-load.yml file and update it with the relevant load test configurations.

## Running your tests

- Download the BrowserStack CLI for your operating system. The download is a zip: extract it and place the `browserstack-cli` binary in the root of this project.
  - [macOS x86](https://load-api.browserstack.com/api/v1/binary?os=macos&arch=x64)
  - [macOS ARM](https://load-api.browserstack.com/api/v1/binary?os=macos&arch=arm64)
  - [Windows x86](https://load-api.browserstack.com/api/v1/binary?os=win&arch=x64)
  - [Linux x86](https://load-api.browserstack.com/api/v1/binary?os=linux&arch=x64)
  - [Linux ARM](https://load-api.browserstack.com/api/v1/binary?os=linux&arch=arm64)
- Start your test:
  - macOS / Linux: `./browserstack-cli load run`
  - Windows (PowerShell): `.\browserstack-cli.exe load run`

## Notes
* You can view your test results on the [BrowserStack Load Testing dashboard](https://load.browserstack.com)