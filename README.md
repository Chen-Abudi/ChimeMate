# ChimeMate - GitHub Productivity VSCode Extension

# 🧠 Open source Project

## Developed by Grace Chen Abudi 👩🏽‍💻

---

### Stay Tuned

**ChimeMate** helps developers track their coding progress effortlessly by acting as your **personal commit journal**. Imagine a tool that logs your work every 30 minutes, intelligently summarizing your changes and syncing them with GitHub for full traceability and transparency.

Whether your'e freelancing, contributing to open source, or studying, **ChimeMate** keeps a reliable timeline of your work - so you don't have to.

---

## 🚀 Features

- ⏰ **Auto Commit Logging**: Log code progress at regular intervals (default: 30 minutes).
- 🧾 **GitHub Commit Fetching**: Integrates with GitHub API to fetch latest commit metadata (author, files changes, stats, additions/deletions, and more).
- 📊 **Local Commit History**: Stores commit logs in a structured JSON file to track file changes, time, and progress.
- 🔐 **Error-Handled API Access**: Gracefully handles API failures and ensures no interruptions to your workflow.
- 💬 **Console Feedback**: Get clear logs and confirmation when auto-logging or syncing with GitHub.

---

## 🌱 ⏳ Coming Soon

- 🖥️ **Visual Commit Timeline**: Integrated sidebar for viewing your commit activity.
- ☁️ **Cloud Sync**: Sync logs across multiple devices securely.
- 🧠 **AI-generated Commit Summaries**: Intelligent log summaries using LLMs.
- 🧪 Testing coverage and performance logs.
- 📦 Multi-platform Git provider support - (Optional: GitLab, Bitbucket, etc.)

---

## ⚙️ Requirements

- Node.js ≥ 18.x
- GitHub Personal Access Token (for GitHub integration)
- VS Code version 1.70 or later

> [!IMPORTANT]
> Make sure your token is added securely via environment variables or the VSCode settings.

> [!IMPORTANT]
> Ensure your token has `repo` access to read commit metadata.

---

## 🔧 Extension Settings

This extension contributes the following VS Code settings:

| Setting                     | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| `chimeMate.enable`          | Enable/disable ChimeMate                                   |
| `chimeMate.autoLogInterval` | Set auto-log interval in minutes                           |
| `chimeMate.githubToken`     | Set your GitHub token securely                             |
| `chimeMate.repositoryUrl`   | Set GitHub repo URL (e.g., `https://github.com/user/repo`) |

---

## 🐞 Known Issues

- Only supports **public GitHub repositories** for now.
- Logging currently writes to local JSON only; no cloud sync yet.
- Auto-log does not trigger if VSCode is idle or closed.

---

## 📝 Release Notes

**1.0.0**

Initial release of ChimeMate.

**1.1.0**

- 🔗 **Feature:** GitHub API integration to fetch latest commit metadata

- 🧹 **Refactor:** Directory structure for scalability. Organized `src/types`, `src/github`, and `src/utils` directories.

- 📁 **Logging:** Writes structured JSON logs per commit

- 🔐 **Security:** Uses environment variable to protect GitHub token

---

## ✅ Roadmap (Next Milestones)

- [ ] 📊 Add commit visualization panel
- [ ] 📝 Enable commit comment editing pre-log
- [ ] 🌿 Support multiple branches
- [ ] ☁️ Cloud commit log storage
- [ ] 📅 Auto-generate weekly coding reports & visual insights
- [ ] 🌐 Git provider support (GitLab/Bitbucket)

---

## 🤝🏽 Contributing

Contributions from developers of all experience levels are welcome!
Please read the [**CONTRIBUTING.md**](CONTRIBUTING.md) guide to get started.

---

## 📜 Additional Policies

I strive to create a collaborative and respectful community where everyone feels valued and safe.
Please take a moment to read the guidelines and security policy:

- [📘 Contributor Code of Conduct](./CODE_OF_CONDUCT.md)
- [🔐 Security Policy](./SECURITY.md)

---

## 📚 For More Info

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview).
- [GitHub API Docs](https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28).

---

## 🎉 Enjoy using ChimeMate!

**_Track your progress. Celebrate your growth. One commit at a time._**

<!-- ---

This is the README for your extension "ChimeMate". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!** -->
