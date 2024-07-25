/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)

// /** @type {import('jest').Config} */
// const config = {
//   // Automatically clear mock calls, instances, contexts and results before every test
//   clearMocks: true,

//   // Indicates whether the coverage information should be collected while executing the test
//   collectCoverage: true,

//   // The directory where Jest should output its coverage files
//   coverageDirectory: "coverage",

//   // Use babel-jest to transform JavaScript and JSX files
//   transform: {
//     '^.+\\.(ts|tsx)?$': ['swc-jest'],
//     '^.+\\.(js|jsx)?$': ['swc-jest'],
//   },

//   // Specify the test environment
//   testEnvironment: 'jest-environment-jsdom',

//   // The glob patterns Jest uses to detect test files
//   testMatch: [
//     "**/__tests__/**/*.[jt]s?(x)",
//     "**/?(*.)+(spec|test).[tj]s?(x)"
//   ],

//   // Transform ignore patterns
//   transformIgnorePatterns: [
//     "/node_modules/"
//   ],

//   // Ensure module directories include node_modules
//   moduleDirectories: [
//     "node_modules"
//   ],

//   // Handle file extensions used by your modules
//   moduleFileExtensions: [
//     "js",
//     "jsx",
//     "json",
//     "node", 
//     "tsx"
//   ],

//   // Handle image mocking
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
//   },
// };

// module.exports = config;
