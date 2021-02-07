module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/test/"],
}
