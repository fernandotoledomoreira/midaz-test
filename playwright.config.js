// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
require('log-timestamp');

dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 130 * 1000,
  expect: { timeout: 30000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['allure-playwright',
      {
        environmentInfo: {
          ENV: "localhost"
        },
        detail: true,
        suiteTitle: false,
        outputFolder: 'reports/allure-results'
      }
    ],
    ['html', { outputFolder: 'reports/playwright-report', open: 'never' }],
    ['list'],
    ['junit', { outputFile: 'reports/junit/results.xml', open: 'never' }]
  ],
  use: {
  }
});

