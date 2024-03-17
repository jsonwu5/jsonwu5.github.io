# 解决 VitePress 构建过程中的Jekyll报出 SCSS 转换错误

**摘要：** 使用 GitHub Actions 自动部署 VitePress 时可能遇到的 SCSS 转换错误，并提供了一种简单的解决方案。

在使用 GitHub Actions 自动部署 VitePress 时，有时可能会遇到 SCSS 转换错误，错误信息类似于：

`Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss': No such file or directory @ dir_chdir - /github/workspace/docs`

![](https://s2.loli.net/2024/03/17/hikeJOSaXflpEqz.png)

这种错误会导致构建过程中失败，阻止网站的部署。

解决这个问题的方法其实很简单。我们需要到项目仓库的 Settings > Pages > Build and deployment 中进行设置。在默认情况下，VitePress 的源文件目录是 `/docs`，而我们需要将其改成 `/(root)`，即根目录。这样一来，GitHub Pages 将会从根目录开始构建网站，而不是从 `/docs` 目录。

## 操作步骤：

1. 打开项目仓库的 Settings 页面。
2. 在左侧导航栏中，选择 Pages 选项。
3. 在 Build and deployment 部分，找到 Branch 选项。
4. 将 Branch 的值从 `/docs` 改为 `/(root)`。
5. 点击 Save 按钮保存更改。

![](https://s2.loli.net/2024/03/17/1vOm6V7J25hkxAj.png)

保存更改后，GitHub Pages 将会从根目录开始构建你的 VitePress 网站，这样就解决了 SCSS 转换错误的问题。

希望以上解决方案能够帮助你顺利部署你的 VitePress 网站！

## 参考链接

[https://github.com/orgs/community/discussions/76938](https://github.com/orgs/community/discussions/76938)
