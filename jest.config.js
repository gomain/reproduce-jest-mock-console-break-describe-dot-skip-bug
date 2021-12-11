/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  setupFilesAfterEnv: [
    // comment this line and test will pass without error
    "jest-mock-console/dist/setupTestFramework.js",
  ],
};

module.exports = config;
