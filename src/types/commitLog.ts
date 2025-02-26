export interface CommitLogEntry {
  timestamp: string; // ISO string format "YYYY-MM-DDTHH:mm:ss"
  commitHash: string;
  message: string;
  filesChanged: string[];
  repoName: string;
  branch: string;
  authorName: string;
  authorEmail: string;
  commitUrl: string;
  additions: number;
  deletions: number;
  totalChanges: number;
  commitDurations?: number;
  tags?: string[];
}
