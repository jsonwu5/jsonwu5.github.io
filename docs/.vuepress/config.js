module.exports = {
  title: 'Learning',
  description: 'A learning site',
  base: '/learning/',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/jsonwu5',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'uni-app', link: '/uniapp/bug.md' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/uniapp/bug.md', 'uni-app']
    ]
  }
}