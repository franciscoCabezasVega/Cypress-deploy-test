const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com/',
    video: false,
    retries: 2,
    projectId: "am6186",
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
