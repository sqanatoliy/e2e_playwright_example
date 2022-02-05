import { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Timeout
  timeout: 30000,

  //repeatEach: 60,

  retries: 1,

  globalSetup:require.resolve('./global-setup.ts'),
  globalTeardown:require.resolve('./global-teardown'),

  use: {
    //storageState: 'storageState.json',
    trace: 'on',
    //Base URL
    baseURL: 'https://test.nodered.ubraine.com/',
    

    // Browser options
    headless: true,
    

    // Context options
    viewport: { width: 1920, height: 1080 },

    // Artifacts
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // },

    // "iPhone 11" tests use WebKit browser.
    // {
    //   name: 'iPhone 11',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['iPhone 11'],
    //   },
    // },
  ],

  // reporter: [ 
  //   ['list'],
  //   ['html', { outputFolder: 'playwright-report' }]
  // ],
  reporter: process.env.CI ? 'html' : 'list',

};

export default config;
