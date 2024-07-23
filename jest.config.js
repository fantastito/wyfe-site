/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Use babel-jest to transform JavaScript and JSX files
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Specify the test environment
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // Transform ignore patterns
  transformIgnorePatterns: [
    "/node_modules/"
  ],

  // Ensure module directories include node_modules
  moduleDirectories: [
    "node_modules"
  ],

  // Handle file extensions used by your modules
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "node"
  ],
};

module.exports = config;
