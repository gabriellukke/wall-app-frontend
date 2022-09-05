const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ocvr4g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});
