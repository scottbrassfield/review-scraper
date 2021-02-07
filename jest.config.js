module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/*.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/test/",
    "<rootDir>/src/output.ts",
    "<rootDir>/src/index.ts",
  ],
  setupFilesAfterEnv: ["jest-extended"],
}
