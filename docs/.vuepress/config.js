module.exports = {
  title: 'Learning',
  description: 'A learning site',
  base: '/learning/',
  head: [
    ['link', { rel: 'icon', href: 'https://avatars3.githubusercontent.com/u/31365163?s=400&u=eae13bda63ad57a1cf52ef03341521e2af03fd4a&v=4' }]
  ],
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/jsonwu5',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    // 顶部导航栏
    nav: [
      { text: 'uni-app', link: '/uniapp/skill.md' }
    ],
    // 侧边栏
    sidebar: [
      {
        title: 'uni-app',
        collapsable: true,
        children: ['/uniapp/skill.md', '/uniapp/tabbar.md']
      },
      {
        title: 'CSS相关',
        collapsable: true,
        children: ['/css/scss.md']
      },
      {
        title: '软件分享',
        collapsable: true,
        children: ['/soft/Listary.md']
      },
      {
        title: '电脑技巧',
        collapsable: true,
        children: ['/pc/pcskill.md']
      }
    ]
  }
}