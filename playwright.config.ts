import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment';

const isCI = Boolean(process.env.CI);
const AUTH_FILE = 'playwright/.auth/user.json';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  ...(isCI && { workers: 2 }),
  timeout: 30_000,
  expect: { timeout: 5_000 },
  outputDir: 'test-results/artifacts',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  use: {
    baseURL: env.baseUrl,
    testIdAttribute: env.testIdAttribute,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
  },
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium-public',
      testMatch: /.*login\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], storageState: { cookies: [], origins: [] } },
    },
    {
      name: 'chromium',
      testIgnore: [/.*\.api\.spec\.ts/, /.*\.setup\.ts/, /.*login\.spec\.ts/],
      use: { ...devices['Desktop Chrome'], storageState: AUTH_FILE },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      testIgnore: [/.*\.api\.spec\.ts/, /.*\.setup\.ts/, /.*login\.spec\.ts/],
      use: { ...devices['Desktop Firefox'], storageState: AUTH_FILE },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      testIgnore: [/.*\.api\.spec\.ts/, /.*\.setup\.ts/, /.*login\.spec\.ts/],
      use: { ...devices['Desktop Safari'], storageState: AUTH_FILE },
      dependencies: ['setup'],
    },
    {
      name: 'api',
      testMatch: /.*\.api\.spec\.ts/,
      use: { baseURL: env.apiBaseUrl },
    },
  ],
});
