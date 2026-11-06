# browserstack-nightwatch-load-testing-sample
This repo contains samples for running [Nightwatch](https://nightwatchjs.org/) tests on BrowserStack Load Testing using the BrowserStack CLI.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo `git clone https://github.com/browserstack/browserstack-nightwatch-load-testing-sample.git`.
* Set your credentials as environment variables, as described in [Set your credentials](#set-your-credentials).
* Use Node.js 20 or later. For the seven-day release-age policy in `.npmrc`, also use npm 11.10 or later (`npm install -g npm@11.10.0`, which needs Node.js 20.17+ or 22.9+); older npm ignores that policy.
* Run `npm i` to install the dependencies.
* Open the browserstack-load.yml file and update it with the relevant load test configurations.

## Set your credentials

The BrowserStack CLI reads your credentials from environment variables. Copy your username and access key from [Account Settings](https://www.browserstack.com/accounts/settings) and export them in the shell you run the test from:

On macOS or Linux (bash or zsh), run the lines below. The second one prompts for the key without echoing it, so the key stays out of your shell history:

```sh
export BROWSERSTACK_USERNAME="<your-username>"
printf 'BrowserStack access key: '; read -rs BROWSERSTACK_ACCESS_KEY; echo; export BROWSERSTACK_ACCESS_KEY
```

On Windows, run these in PowerShell. The second line prompts for the key in the same way:

```powershell
$env:BROWSERSTACK_USERNAME = "<your-username>"
$env:BROWSERSTACK_ACCESS_KEY = [System.Net.NetworkCredential]::new('', (Read-Host -AsSecureString 'BrowserStack access key')).Password
```

These variables last only for the current terminal session. If the CLI reports an authentication error, check that both are set in the terminal you run it from.

**Never commit your credentials.** Keep your access key out of `browserstack-load.yml` and every other file you push. If a key is ever exposed, regenerate it from Account Settings.

## Running your tests

- Download the BrowserStack CLI for your operating system. The download is a zip: extract it and place the `browserstack-cli` binary (`browserstack-cli.exe` on Windows) in the root of this project.
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