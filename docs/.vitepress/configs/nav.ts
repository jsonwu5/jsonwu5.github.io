import type {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: 'UniApp',
        items: [
            {text: 'Skill', link: '/uniapp/skill.md'},
            {text: 'Tabbar', link: '/uniapp/tabbar.md'},
            {text: 'Painter', link: 'uniapp/Painter.md'}
        ]
    },
    {
        text: 'CSS相关',
        items: [{text: 'Scss', link: '/css/scss.md'}]
    },
    {
        text: '软件分享',
        items: [{text: 'Listary', link: '/soft/Listary.md'}]
    },
    {
        text: '电脑技巧',
        items: [{text: 'PcSkill', link: '/pc/pcskill.md'}]
    },
    {
        text: '笔记',
        items: [{text: '日常笔记', link: '/notes/dailynotes.md'}]
    }
];
