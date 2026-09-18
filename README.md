# 乐呜瑞（Learning）

记录一些学习资料以及踩坑 bug 等，包括 Vue、小程序、uni-app 等相关学习资料和踩坑记录。

## 技术栈

- [VitePress](https://vitepress.dev/) 1.6 + Vue 3
- pnpm 管理依赖
- GitHub Actions 自动构建并部署到 GitHub Pages

## 目录结构

```
docs/
├── .vitepress/        # VitePress 配置
│   ├── config.ts      # 站点、主题、dev server 配置
│   └── configs/       # head、nav、sidebar 等拆分配置
├── public/            # 静态资源（原样拷贝到产物根目录）
│   └── trip/          # 摩旅路书等独立 HTML 页面
├── notes/  pc/  soft/  uniapp/   # 各类笔记
└── index.md           # 首页
```

## 本地开发

```bash
pnpm install
pnpm dev          # 启动开发服务器（默认端口 8732）
```

启动后终端会同时打印两个地址：

```
➜  Local:   http://localhost:8732/
➜  Network: http://192.168.x.x:8732/
```

- `Local`：仅本机访问
- `Network`：同一局域网内的手机、平板、其他电脑用这个地址即可预览

dev server 已在 `docs/.vitepress/config.ts` 中设置 `server.host = true`（并在 `dev` 脚本上附加 `--host`），
因此默认监听所有网卡，无需再手动加 `--host`。若某台设备打不开，通常是系统防火墙拦截了 Node 进程，放行即可。

只想本机访问时，把 `config.ts` 里的 `host: true` 改为 `false`，或直接执行 `pnpm exec vitepress dev docs`。

## 构建与部署

```bash
pnpm build        # 构建，产物输出到 dist/
pnpm docs:build   # 同上
```

推送到 `master` 分支且改动涉及 `docs/**` 或 `package.json` 时，GitHub Actions 会自动执行
`pnpm install → pnpm build`，并把 `dist/` 部署到 `gh-pages` 分支，随后由 GitHub Pages 发布。

## 许可

ISC
