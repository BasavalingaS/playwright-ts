module.exports = {
  preset: "jest-playwright-preset",
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["firefox"],
      launchOptions: {
        headless: false,
      },
    },
  },
};
