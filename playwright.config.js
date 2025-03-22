// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',

  //object timeout
  timeout: 40*1000,

  //expectation timeout
  expect : {
    timeout: 40*1000,
  },

  reporter : 'html',

  //browser used
  use: {
    browserName : 'chromium',
    
    headless: false
  },

});
module.exports = config

