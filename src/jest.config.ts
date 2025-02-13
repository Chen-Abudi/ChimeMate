module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^vscode$": "<rootDir>/__mocks__/vscode.ts", // if needed for VS Code testing
  },
};
