import * as assert from "assert";
import * as vscode from "vscode";
import * as http from "http";
import express from "express";
import axios from "axios";
import * as chimemate from "../extension"; // Import the actual extension

// Mock environment variables for testing
process.env.GITHUB_CLIENT_ID = "mockClientId";
process.env.GITHUB_CLIENT_SECRET = "mockClientSecret";
process.env.REDIRECT_URI = "http://localhost:3000/auth/callback";

suite("Extension Test Suite", () => {
  let server: http.Server;

  // Start the server and activate the extension before tests run
  suiteSetup((done) => {
    const app = express();
    app.get("/auth/callback", (req, res) => {
      res.send("Authentication successful!");
    });
    server = app.listen(3000, () => {
      console.log("OAuth server running on http://localhost:3000");

      // Activate the extension in the test context
      chimemate.activate({
        subscriptions: [],
      } as unknown as vscode.ExtensionContext);

      done();
    });
  });

  // Stop the server and deactivate the extension after tests finish
  suiteTeardown(() => {
    server.close();

    // Deactivate the extension
    chimemate.deactivate();
  });

  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test for OAuth redirect", async () => {
    // Simulate the user clicking on the "startTracking" command
    const uri = `https://github.com/login/oauth/authorize?client_id=mockClientId&redirect_uri=http://localhost:3000/auth/callback&scope=repo`;
    const expectedUrl = vscode.Uri.parse(uri);

    // Ensure the URL matches what the extension opens
    assert.strictEqual(
      vscode.env.openExternal(vscode.Uri.parse(uri)),
      expectedUrl
    );

    // Simulate a request to the /auth/callback endpoint
    try {
      const response = await axios.get("http://localhost:3000/auth/callback", {
        params: { code: "mockCode" },
      });
      assert.strictEqual(response.data, "Authentication successful!");
    } catch (error) {
      assert.fail("OAuth callback request failed");
    }
  });

  test("Sample test for invalid OAuth code", async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/callback", {
        params: { code: "invalidCode" },
      });
      assert.fail("Expected an error response due to invalid OAuth code");
    } catch (error) {
      assert.ok(error);
    }
  });
});
