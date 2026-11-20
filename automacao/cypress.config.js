const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    supportFile: "cypress/support/commands.js",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: "../evidencias/videos",
    screenshotsFolder: "../evidencias/screenshots",
    setupNodeEvents(on, config) {
      // configurações futuras de plugins/relatórios
    },
  },
});
