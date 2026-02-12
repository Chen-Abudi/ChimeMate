# ChimeMate - GitHub Productivity VSCode Extension

## 🧠 Open source Project

### Developed by Grace Chen Abudi 👩🏽‍💻

---

### The Problem

Have you ever found yourself coding for hours, totally in the zone mode, and then realized you can't quite recall what you actually did?
Between commits, context switching, debugging marathons, and jumping across files, it's easy to lose track of our progress especially when commits don't quite reflect the full picture.
Manual journaling or remembering every change isn't realistic for busy developers.

---

### The Solution - Meet ChimeMate

**ChimeMate** acts as your personal **commit companion**, quietly keeping a timeline of your coding journey.
It automatically logs your progress every 30 minutes, summarizes changes, and syncs them with GitHub, so your work history stays clear, structured, and transparent without any extra effort.

Whether your'e freelancing, contributing to open source, or just learning, **ChimeMate** helps you see **_your growth unfold one commit at a time_**

---

### Why You'll Love It

- No more forgetting what you worked on.
- No more messy commit history.
- Just pure visibility into your daily progress, simple, smart, and seamless.

---

## Core Features

- **Auto Commit Logging**: Automatically logs code progress at regular intervals (default: every 30 minutes).

- **GitHub Commit Fetching**: Integrates with the GitHub API to fetch detailed commit data: author, changed files, stats, additions, deletions, and more.

- **Local Commit History**: Stores structured commit logs in JSON format for easy access and time tracking.

- **Error-Handled API Access**: Gracefully handles API failures so your workflow never stops.

- **Console Feedback**: Clear, friendly logs let you know when auto-logging or syncing is in progress.

---

## 🌱 ⏳ Coming Soon

Just got started, but here's what's next on ChimeMate's journey:

- **Visual Commit Timeline**: A sleek sidebar panel inside VS Code to visualize your commit history at a glance.

- **Cloud Sync**: Keep your logs backed up and accessible across all your devices.

- **AI-generated Commit Summaries**: Smart, meaningful summaries generated automatically by LLMs.

- **Test Coverage Insights**: Track testing performance alongside commits.

- **Multi-platform Git Provider Support**: Optional support for GitLab, Bitbucket, and beyond.

---

## ⚙️ Requirements

- **Node.js** ≥ 18.x
- **GitHub Personal Access Token** (for GitHub integration)
- **VS Code** version 1.70 or later

> [!IMPORTANT]
> Make sure your token is added securely via environment variables or the VSCode settings.

> [!IMPORTANT]
> Ensure your token has `repo` access to read commit metadata.

---

## 🔧 Extension Settings

This extension contributes the following VS Code settings:

| Setting                     | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| `chimeMate.enable`          | Enable/disable ChimeMate                                                 |
| `chimeMate.autoLogInterval` | Set how often to auto-log commits (interval in minutes)                  |
| `chimeMate.githubToken`     | Add your GitHub token securely                                           |
| `chimeMate.repositoryUrl`   | Define your GitHub repository URL (e.g., `https://github.com/user/repo`) |

---

### Installation

1. Clone this repository and open it in VS Code.
2. Run `npm install` to install dependencies.
3. Press `F5` to launch a development instance of VS Code with ChimeMate running.

---

## 🐞 Known Issues

- Currently supports **public GitHub repositories only**.
- Logging currently writes to local JSON only (no cloud sync yet).
- Auto-log pauses if VSCode is idle or closed.

<!-- You can track progress or contribute fixes in the **open issues** -->

---

## 📝 Release Notes

**1.0.0**

- Initial release of ChimeMate.

**1.1.0**

- GitHub API integration for commit metadata

- Commit logs stored in `commitLogs.json`

- Secure GitHub token handling via settings/environment

- Refactored directory structure into `src/github`, `src/types`, and `src/utils`

---

## ✅ Roadmap (Next Milestones)

- [ ] 📊 Add visual commit timeline panel inside VS Code
- [ ] 📝 Edit commit comments pre-logging
- [ ] 🌿 Support multi-branches and multi-repo
- [ ] ☁️ Cloud-based commit log storage backup
- [ ] 📅 Auto-generated weekly coding reports & visual insights
- [ ] 🌐 Git provider support (GitLab/Bitbucket)

<!-- Follow our **Project Board** to see what’s cooking! -->

---

## 🤝🏽 Contributing

Contributions are always welcome from all developers skill levels! Whether you’re fixing bugs, improving docs, or dreaming up new features
Please check out the [**CONTRIBUTING.md**](CONTRIBUTING.md) and browse the **open issues**
to find a good place to start.

---

## 📜 Community & Policies

ChimeMate is built with aloha and respect 🌺.

I strive to create a collaborative and respectful community where everyone feels valued and safe.
Please take a moment to read the guidelines and the security policy:

- [📘 Contributor Code of Conduct](./CODE_OF_CONDUCT.md)
- [🔐 Security Policy](./SECURITY.md)

---

## 📚 Additional Resources

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview).
- [GitHub API Docs](https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28).

---

**_Track your progress. Celebrate your growth. One commit at a time._**

<!-- ## 🎉 Enjoy Using ChimeMate! -->

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
