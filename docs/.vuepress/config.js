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
    lastUpdated: '上次更新',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/jsonwu5/learning',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
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
  },
  plugins: ['@vuepress/last-updated']
}