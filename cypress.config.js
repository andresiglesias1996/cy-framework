import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';
import cypressGrep from '@cypress/grep/src/plugin.js';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://example.cypress.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      });

      cypressGrep(config);
      return config;
    },
  },
});
