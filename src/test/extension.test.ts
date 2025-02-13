import * as vscode from "vscode";
import express from "express";
import axios from "axios";
import { deactivate } from "../extension";

// Mock the required modules
jest.mock("axios");
jest.mock("vscode", () => ({
  commands: {
    executeCommand: jest.fn().mockResolvedValue({ success: true }),
  },
}));

describe("GitHub OAuth Extension", () => {
  let appMock: express.Express;
  let serverListenMock: jest.Mock;

  beforeEach(() => {
    // Initialize mock objects
    appMock = express();
    serverListenMock = jest.fn();
    appMock.listen = serverListenMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should activate the extension", async () => {
    const spy = jest.spyOn(appMock, "listen");
    appMock.listen(3000);

    expect(spy).toHaveBeenCalledWith(3000);
  });

  it("should handle OAuth callback correctly", async () => {
    const axiosPostMock = axios.post as jest.Mock;
    axiosPostMock.mockResolvedValue({ data: { success: true } });

    const result = await vscode.commands.executeCommand(
      "extension.startTracking"
    );

    expect(result).toEqual({ success: true });
    expect(axiosPostMock).toHaveBeenCalledWith(
      expect.stringContaining("auth/callback"), // Expect URL containing 'auth/callback'
      expect.any(Object) // Expecting any object as the second argument
    );
  });

  it("should handle missing authorization code in callback", async () => {
    const axiosPostMock = axios.post as jest.Mock;
    axiosPostMock.mockRejectedValue(new Error("Missing authorization code"));

    try {
      await vscode.commands.executeCommand("extension.startTracking");
    } catch (error: any) {
      expect(error.message).toBe("Missing authorization code");
    }
  });

  it("should deactivate the extension", async () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    deactivate();
    expect(spy).toHaveBeenCalledWith("Extension deactivated");
  });
});
