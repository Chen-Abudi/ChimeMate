module.exports = {
  commands: {
    registerCommand: jest.fn(),
  },
  window: {
    showInformationMessage: jest.fn(),
  },
  env: {
    openExternal: jest.fn(),
  },
  Uri: {
    parse: jest.fn(),
  },
  globalState: {
    get: jest.fn(),
    update: jest.fn(),
  },
};
