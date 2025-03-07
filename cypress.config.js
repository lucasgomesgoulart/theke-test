const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  video: true,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,
  e2e: {
  },
});