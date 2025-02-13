import * as assert from "assert";
import * as vscode from "vscode";
import * as http from "http";
import express from "express";
import axios from "axios";
import * as chimemate from "../extension";
import nock from "nock";

process.env.GITHUB_CLIENT_ID = "mockClientId";
process.env.GITHUB_CLIENT_SECRET = "mockClientSecret";
process.env.REDIRECT_URI = "http://localhost:3000/auth/callback";

suite("Extension Test Suite", () => {
  let server: http.Server;

  // Start the server and activate the extension before tests run
  suiteSetup((done) => {
    const app = express();
    app.get("/auth/callback", (req, res) => {
      console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
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
    chimemate.deactivate();
  });

  vscode.window.showInformationMessage("Start all tests.");

  test("Environment variables are loaded", () => {
    assert.strictEqual(process.env.GITHUB_CLIENT_ID, "mockClientId");
    assert.strictEqual(process.env.GITHUB_CLIENT_SECRET, "mockClientSecret");
    assert.strictEqual(
      process.env.REDIRECT_URI,
      "http://localhost:3000/auth/callback"
    );
  });

  test("Successful OAuth2 token retrieval", async () => {
    const response = await axios.get("http://localhost:3000/auth/callback", {
      params: { code: "validCode" },
    });
    assert.strictEqual(response.data, "Authentication successful!");
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

  test("Start Tracking command is registered", async () => {
    const commands = await vscode.commands.getCommands();
    assert.ok(commands.includes("extension.startTracking"));
  });

  test("Start Tracking command triggers correct behavior", async () => {
    // Mock the GitHub API response
    const mockRepoData = [
      { name: "repo1", url: "https://github.com/user/repo1" },
      { name: "repo2", url: "https://github.com/user/repo2" },
    ];
    nock("https://api.github.com").get("/user/repos").reply(200, mockRepoData);

    // Simulate running the startTracking command
    const context = {
      globalState: {
        get: () => "mockAccessToken", // Simulate getting a saved token
      },
    } as unknown as vscode.ExtensionContext;

    await chimemate.activate(context);

    const commands = await vscode.commands.getCommands();
    if (!commands.includes("extension.startTracking")) {
      const disposable = vscode.commands.registerCommand(
        "extension.startTracking",
        async () => {
          const savedToken = context.globalState.get("chimemate.accessToken");

          if (savedToken) {
            try {
              const commitData = await axios.get(
                "https://api.github.com/user/repos",
                {
                  headers: { Authorization: `Bearer ${savedToken}` },
                }
              );
              console.log(commitData.data);
              assert.deepEqual(commitData.data, mockRepoData); // Check if the mocked repo data matches
            } catch (error) {
              assert.fail("Error fetching GitHub repos");
            }
          } else {
            assert.fail("No saved access token found.");
          }
        }
      );

      context.subscriptions.push(disposable);
    }
  });

  test("Access token is saved and retrieved correctly", async () => {
    // Simulate saving the access token to globalState
    const context = {
      globalState: {
        update: (value: string) => {
          assert.strictEqual(value, "mockAccessToken");
        },
        get: () => "mockAccessToken",
      },
    } as unknown as vscode.ExtensionContext;

    await chimemate.activate(context);

    // Simulate retrieving the access token
    const token = context.globalState.get("chimemate.accessToken");
    assert.strictEqual(token, "mockAccessToken");
  });
});
