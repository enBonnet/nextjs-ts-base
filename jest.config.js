module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test-setup/setup.js"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/__tests__/*.ts?(x)"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./test-setup/babel.config.js" },
    ],
  },
};
