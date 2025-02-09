import * as vscode from "vscode";
import * as dotenv from "dotenv";
import express from "express";
import axios from "axios";
import { AuthorizationCode } from "simple-oauth2";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Log the raw environment variables for debugging purposes
console.log("Raw Environment Variables:", process.env);

// dotenv.config();

const config = {
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
};

// Log environment variables for debugging purposes
console.log("Environment Variables Loaded:");
console.log("GITHUB_CLIENT_ID:", config.clientId);
console.log("GITHUB_CLIENT_SECRET:", config.clientSecret);
console.log("REDIRECT_URI:", config.redirectUri);

if (!config.clientId || !config.clientSecret || !config.redirectUri) {
  console.error(
    "❌ Missing environment variables! Please check your .env file."
  );
  process.exit(1);
} else {
  console.log("✅ Environment variables loaded successfully!");
}

// OAuth2 Configuration for GitHub
const oauth2 = new AuthorizationCode({
  client: {
    id: config.clientId,
    secret: config.clientSecret,
  },
  auth: {
    tokenHost: "https://github.com/login/oauth",
    authorizePath: "/authorize",
    tokenPath: "/access_token",
  },
});

let server: any = null; // Store Express server instance

export function activate(context: vscode.ExtensionContext) {
  if (server) {
    console.log("OAuth server already running.");
    return;
  }

  const app = express();

  app.get("/auth/callback", async (req, res) => {
    const { code } = req.query;

    if (!code) {
      res.status(400).send("No authorization code provided!");
      return;
    }

    const tokenParams = {
      code: code as string,
      redirect_uri: config.redirectUri as string,
    };

    try {
      console.log("Received OAuth code, requesting access token...");
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      };
      const accessToken = await oauth2.getToken(tokenParams, { headers });

      context.globalState.update(
        "chimemate.accessToken",
        accessToken.token.access_token
      );
      console.log("Access token saved.");

      console.log("Fetching user data from GitHub...");
      const userData = await axios.get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken.token.access_token}` },
      });

      console.log(`OAuth successful! Authenticated as ${userData.data.login}`);
      vscode.window.showInformationMessage(
        `Authenticated as ${userData.data.login}`
      );

      res.send("Authentication successful! You can close this window.");
    } catch (error) {
      res.status(500).send("Authentication failed!");
      console.error("Error during OAuth process:", error);
    }
  });

  server = app.listen(3000, () => {
    console.log("OAuth server running on http://localhost:3000");
  });

  let disposable = vscode.commands.registerCommand(
    "extension.startTracking",
    async () => {
      console.log("Opening GitHub OAuth authorization URL...");

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&scope=repo`;

      vscode.env.openExternal(vscode.Uri.parse(authUrl));

      // Check if an access token already exists
      const savedToken = context.globalState.get<string>(
        "chimemate.accessToken"
      );

      if (savedToken) {
        console.log("Found saved access token.");
        // Use the token to make API requests
        try {
          const commitData = await axios.get(
            "https://api.github.com/user/repos",
            {
              headers: { Authorization: `Bearer ${savedToken}` },
            }
          );
          console.log(commitData.data);
        } catch (error) {
          console.error("Error fetching GitHub repos:", error);
        }
      } else {
        console.log("No saved access token found. Please authenticate.");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  if (server) {
    console.log("Stopping OAuth server...");
    server.close();
  }
  console.log("Extension deactivated");
}
