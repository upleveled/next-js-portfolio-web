import { PlaywrightTestConfig } from '@playwright/test';

// Config file docs: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  testMatch: '**/playwright/**',
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI
    ? 'list'
    : [['html', { outputFolder: 'playwright/report/' }]],
  outputDir: 'playwright/test-results/',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'data-test-id',
  },
};

export default config;