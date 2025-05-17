import fs from "fs";
import path from "path";
import { CommitLogEntry } from "../types/commitLog";

const LOGS_FILE = path.join(__dirname, "../../commitLogs.json");

/**
 * Appends a commit entry to the log file.
 * @param commitData - Commit details
 */
export const logCommit = (commitData: CommitLogEntry): void => {
  try {
    let logs: CommitLogEntry[] = [];

    // Read existing logs if the file exists
    if (fs.existsSync(LOGS_FILE)) {
      const data = fs.readFileSync(LOGS_FILE, "utf-8");
      logs = JSON.parse(data) as CommitLogEntry[];
    }

    // Append new commit entry
    logs.push(commitData);

    // Write updated logs back to file
    fs.writeFileSync(LOGS_FILE, JSON.stringify(logs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to commit log file:", error);
  }
};
