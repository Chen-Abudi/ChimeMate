import axios from "axios";
import { CommitLogEntry } from "../types/commitLog";
import { logCommit } from "../utils/commitLogger";

/**
 * Fetches the latest commit from GitHub and logs it.
 * @param repo - Format: owner/repo (e.g., Chen-Abudi/ChimeMate)
 * @param branch - Branch name (e.g., main)
 * @param token - GitHub OAuth token
 */
export const fetchLatestCommit = async (
  repo: string,
  branch: string,
  token: string
): Promise<void> => {
  const commitUrl = `https://api.github.com/repos/${repo}/commits?sha=${branch}`;

  try {
    const commitResponse = await axios.get(commitUrl, {
      headers: { Authorization: `token ${token}` },
    });

    const latestCommit = commitResponse.data?.[0];

    if (!latestCommit) {
      throw new Error("No commits found.");
    }

    const commitSha = latestCommit.sha;
    const commitDetailsUrl = `https://api.github.com/repos/${repo}/commits/${commitSha}`;

    const detailResponse = await axios.get(commitDetailsUrl, {
      headers: { Authorization: `token ${token}` },
    });

    const details = detailResponse.data;

    const commitData: CommitLogEntry = {
      timestamp: new Date().toISOString(),
      commitHash: details.sha,
      message: details.commit.message,
      filesChanged: details.files.map(
        (file: { filename: string }) => file.filename
      ),
      repoName: repo,
      branch: branch,
      authorName: details.commit.author.name || "",
      authorEmail: details.commit.author.email || "",
      commitUrl: details.html_url || "",
      additions: details.stats.additions || 0,
      deletions: details.stats.deletions || 0,
      totalChanges: details.stats.total || 0,
    };

    logCommit(commitData);
  } catch (error) {
    console.error("Error fetching latest commit:", error);
  }
};
