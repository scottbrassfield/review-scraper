// eslint-disable-next-line
const baseConfig = require("./jest.config")

module.exports = {
  ...baseConfig,
  coveragePathIgnorePatterns: [
    ...baseConfig.coveragePathIgnorePatterns,
    "web-requester.ts",
  ],
  testPathIgnorePatterns: [".int.spec.ts"],
}
