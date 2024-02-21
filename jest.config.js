const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  // coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/coverage/**"],
  coveragePathIgnorePatterns: [
    "/*.test.jsx",
    "/*.config.js",
    "/.next",
    "/lib",
    "/components/ui",
    "layout.js",
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
