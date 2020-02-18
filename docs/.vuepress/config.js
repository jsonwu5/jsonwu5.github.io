module.exports = {
  title: 'Learning',
  description: 'A learning site',
  base: '/learning/',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/jsonwu5/learning',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
}