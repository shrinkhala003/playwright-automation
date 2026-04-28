/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./src/testSuites",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: "https://basecamp-staging.codingmountain.com/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup:normalUser",
      testMatch: "**/setup/auth.setup.ts",
      use: {
        channel: "chrome",
        launchOptions: { args: ["--disable-blink-features=AutomationControlled"] },
      },
    },
    {
      name: "setup:admin",
      testMatch: "**/setup/auth.setup.ts",
      use: {
        channel: "chrome",
        launchOptions: { args: ["--disable-blink-features=AutomationControlled"] },
      },
    },
    {
      name: "setup:superAdmin",
      testMatch: "**/setup/auth.setup.ts",
      use: {
        channel: "chrome",
        launchOptions: { args: ["--disable-blink-features=AutomationControlled"] },
      },
    },
    {
      name: "setup:supervisor",
      testMatch: "**/setup/auth.setup.ts",
      use: {
        channel: "chrome",
        launchOptions: { args: ["--disable-blink-features=AutomationControlled"] },
      },
    },

    // ── Auth spec (no storageState - tests the login flow itself) ──────────
    {
      name: "auth-tests",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /.*auth\.spec\.ts/,
      testIgnore: /.*\.setup\.ts/,
    },

    // ── Role-based test projects ───────────────────────────────────────────
    {
      name: "normalUser",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "./auth/normalUser.json",
      },
      dependencies: ["setup:normalUser"],
      testIgnore: [/.*auth\.spec\.ts/, /.*\.setup\.ts/],
    },
    {
      name: "admin",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "./auth/admin.json",
      },
      dependencies: ["setup:admin"],
      testIgnore: [/.*auth\.spec\.ts/, /.*\.setup\.ts/],
    },
    {
      name: "superAdmin",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "./auth/superAdmin.json",
      },
      dependencies: ["setup:superAdmin"],
      testIgnore: [/.*auth\.spec\.ts/, /.*\.setup\.ts/],
    },
    {
      name: "supervisor",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "./auth/supervisor.json",
      },
      dependencies: ["setup:supervisor"],
      testIgnore: [/.*auth\.spec\.ts/, /.*\.setup\.ts/],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: "npm run start",
  //   url: "http://localhost:3000",
  //   reuseExistingServer: !process.env.CI,
  // },
});
