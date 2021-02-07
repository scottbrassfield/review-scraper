// eslint-disable-next-line
const baseConfig = require("./jest.config")

module.exports = {
  ...baseConfig,
  testRegex: ".int.spec.ts$",
}
