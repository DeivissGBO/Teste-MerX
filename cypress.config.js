const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: "https://www.preprod.backoffice.merx.tech/",
    user: "83579337009",
    pass: "qa@Mudar1",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
