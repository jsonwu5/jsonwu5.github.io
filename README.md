# 乐呜瑞（Learning）

> 记录所学，分享所遇。学无止境，知识是通向成功的不竭源泉。

基于 [VitePress](https://vitepress.dev/) 构建的个人学习笔记站点，记录前端常用知识、源码阅读笔记、各种奇淫技巧与日常提效工具等，并通过 GitHub Actions 自动部署到 GitHub Pages。

## ✨ 站点内容

- **UniApp**：Skill、Tabbar、Painter 等 uni-app 开发技巧
- **CSS 相关**：Scss 使用经验
- **软件分享**：Listary 等提效工具
- **电脑技巧**：日常 PC 使用技巧
- **笔记**：日常学习笔记与踩坑记录
- **旅行**：北疆金秋环线自驾行程等

## 🛠 技术栈

- [VitePress](https://vitepress.dev/) 1.x — 静态站点生成器
- [Vue](https://vuejs.org/) 3 — 底层框架
- [GitHub Actions](https://github.com/features/actions) — 自动构建部署
- pnpm — 包管理工具

## 📂 目录结构

```
├── docs/                  # 站点源码
│   ├── .vitepress/        # VitePress 配置（config.ts、导航等）
│   ├── css/               # CSS 相关笔记
│   ├── notes/             # 日常笔记
│   ├── pc/                # 电脑技巧
│   ├── public/            # 静态资源（logo、图片等）
│   ├── soft/              # 软件分享
│   ├── uniapp/            # uni-app 相关笔记
│   └── index.md           # 站点首页
├── .github/workflows/     # GitHub Actions 部署工作流
├── package.json
└── pnpm-lock.yaml
```

## 🚀 本地开发

### 环境要求

- Node.js ≥ 18
- [pnpm](https://pnpm.io/) ≥ 8

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

默认端口为 **8732**，浏览器访问 <http://localhost:8732> 即可预览。

也可以使用 npm 脚本：

```bash
npm run dev          # 等同于 pnpm dev
npm run docs:dev     # 使用默认端口启动
```

### 构建

```bash
pnpm build
```

构建产物输出到 `dist` 目录。

## 📦 部署

站点通过 [GitHub Actions](.github/workflows/deploy.yml) 自动部署：

- 推送到 `master` 分支且 `docs/**` 或 `package.json` 有变更时触发
- 自动构建并部署到 `gh-pages` 分支
- GitHub Pages 地址：<https://jsonwu5.github.io>

> 注意：部署依赖仓库 Secrets 中的 `ACCESS_TOKEN`。

## 📝 写作指南

1. 文章使用 Markdown 编写，放入 `docs` 下对应分类目录
2. 在 `docs/.vitepress/configs/nav.ts` 中添加导航入口
3. 首页特性展示可在 `docs/index.md` 的 `features` 中配置

## 📄 License

[ISC](https://opensource.org/license/isc-license-txt) © 2020-present JasonWu