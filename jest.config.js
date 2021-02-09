module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.ts"],
  coverageDirectory: "<rootDir>/test/coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/test/",
    "<rootDir>/modules/output.ts",
    "<rootDir>/config.ts",
  ],
  setupFilesAfterEnv: ["jest-extended"],
  rootDir: "src",
}
