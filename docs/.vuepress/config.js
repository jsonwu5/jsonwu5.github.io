module.exports = {
  title: 'Learning',
  description: 'A learning site',
  base: '/learning/',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/jsonwu5',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
      { text: 'uni-app', link: '/uniapp/bug.md' }
    ],
    sidebar: [
      ['/uniapp/bug.md', 'uni-app'],
      ['/css/scss.md', 'css']
    ]
  }
}