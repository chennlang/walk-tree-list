module.exports = {
  repositoryUrl: "https://github.com/chennlang/walk-tree-list.git",
  branches: ["master"], // 指定在哪个分支下要执行发布操作
  dryRun: true,
  plugins: [
    // 1. 解析 commit 信息，默认就是 Angular 规范
    "@semantic-release/commit-analyzer",
    // 2. 生成发布信息
    "@semantic-release/release-notes-generator",
    // 3. 把发布日志写入该文件
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    // 4. 发布 NPM
    "@semantic-release/npm",
    // 5. 将变更发布到 GitHub Release
    "@semantic-release/github",
    // 6. 前面说到日志记录和版本号是新增修改的，需要 push 回 Git
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
      },
    ],
  ],
};
