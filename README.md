# browserstack-nightwatch-load-testing-sample
This repo contains samples for running [Nightwatch](https://nightwatchjs.org/) tests on BrowserStack using the browserstack-node-sdk.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo `git clone https://github.com/browserstack/browserstack-nightwatch-load-testing-sample.git`.
* Set your credentials as environment variables, as described in [Set your credentials](#set-your-credentials).
* Run `npm i` to install the dependencies.
* Open the browserstack-load.yml file and update it with the relevant load test configurations.

## Set your credentials

The BrowserStack CLI reads your credentials from environment variables. Copy your username and access key from [Account Settings](https://www.browserstack.com/accounts/settings) and export them in the shell you run the test from:

```sh
# macOS / Linux
export BROWSERSTACK_USERNAME="<your-username>"
export BROWSERSTACK_ACCESS_KEY="<your-access-key>"
```

```powershell
# Windows (PowerShell)
$env:BROWSERSTACK_USERNAME = "<your-username>"
$env:BROWSERSTACK_ACCESS_KEY = "<your-access-key>"
```

**Never commit your credentials.** Keep your access key out of `browserstack-load.yml` and every other file you push. If a key is ever exposed, regenerate it from Account Settings.

## Running your tests

- Download the BrowserStack CLI binary for your operating system and place it in the root of this project:
  - [macOS x86](https://load-api.browserstack.com/api/v1/binary?os=macos&arch=x64)
  - [macOS ARM](https://load-api.browserstack.com/api/v1/binary?os=macos&arch=arm64)
  - [Windows x86](https://load-api.browserstack.com/api/v1/binary?os=win&arch=x64)
  - [Linux x86](https://load-api.browserstack.com/api/v1/binary?os=linux&arch=x64)
  - [Linux ARM](https://load-api.browserstack.com/api/v1/binary?os=linux&arch=arm64)
- Run the given command to start your test: `./browserstack-cli load run`.

## Notes
* You can view your test results on the [BrowserStack Load Testing dashboard](https://load.browserstack.com)