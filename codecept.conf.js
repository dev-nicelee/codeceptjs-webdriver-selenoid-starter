require('dotenv').config()
require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: process.env.TEST_PATH || './**/*_test.ts',
  output: process.env.OUTPUT_PATH || './output',
  helpers: {
    WebDriver: {
      url: process.env.URL,
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      // change to true to restart browser between tests
      restart: false,
      // don't change browser state and not clear cookies between tests
      // keepBrowserState: true,
      // keepCookies: true,
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-gpu', '--start-fullscreen'],
        },
        selenoidOptions: {
          enableVideo: true,
        }
      },
    }
  },
  include: {
    I: './custom_steps.ts',
  },
  bootstrap: null,
  mocha: {},
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.ts',
    ],
  },
  name: process.env.PROJECT_NAME || 'Ailys E2E Test Tool',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      attribute: 'data-test',
    },
  }
}