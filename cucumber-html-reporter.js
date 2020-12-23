const reporter = require("cucumber-html-reporter");
const fs = require("fs");
const moment = require("moment");

const metadataFile = "./cypress/reports/metadata.json";

fs.readFile(metadataFile, "utf-8", (error, metadata) => {
  if (error) {
    throw new Error(`An error occurred while reading file: "${metadataFile}"!`);
  } else {
    const data = JSON.parse(metadata);

    const options = {
      theme: "hierarchy",
      jsonDir: "cypress/reports",
      output: `cypress/reports/${moment().format(
        "YYYY-MM-DD_h-mm-ssa"
      )}_cucumber-report.html`,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      ignoreBadJsonFile: true,
      metadata: {
        "App Version": "1.0.0",
        "Test Environment": "QA",
        Browser: data.browser,
        Platform: data.platform,
        Parallel: "Scenarios",
        Executed: "Locally",
      },
    };

    reporter.generate(options);
  }
});
