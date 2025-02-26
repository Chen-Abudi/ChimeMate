import axios from "axios";
import { CommitLogEntry } from "../types/commitLog";
import { logCommit } from "../utils/commitLogger";

/**
 * Fetches the latest commit from GitHub and logs it.
 * @param repo - Repository name
 * @param branch - Branch name
 * @param token - OAuth token
 */
export const fetchLatestCommit = async (
  repo: string,
  branch: string,
  token: string
): Promise<void> => {
  const url = `https://api.github.com/repos/${repo}/commits/${branch}`;

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `token ${token}` },
    });

    if (response.data && response.data.sha) {
      const commitData: CommitLogEntry = {
        timestamp: new Date().toISOString(),
        commitHash: response.data.sha,
        message: response.data.commit.message,
        filesChanged: response.data.files.map(
          (file: { fileName: string }) => file.fileName
        ),
        repoName: repo,
        branch: branch,
        authorName: "",
        authorEmail: "",
        commitUrl: "",
        additions: 0,
        deletions: 0,
        totalChanges: 0,
      };

      logCommit(commitData);
    }
  } catch (error) {
    console.error("Error fetching latest commit:", error);
  }
};
