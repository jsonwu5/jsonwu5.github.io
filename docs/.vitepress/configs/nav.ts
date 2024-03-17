import type {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: 'UniApp',
        items: [
            {text: 'skill', link: '/uniapp/skill.md'},
            {text: 'tabbar', link: '/uniapp/tabbar.md'},
            {text: 'Painter', link: 'uniapp/Painter.md'}
        ]
    },
    {
        text: 'CSS相关',
        items: [{text: 'scss', link: '/css/scss.md'}]
    },
    {
        text: '软件分享',
        items: [{text: 'Listary', link: '/soft/Listary.md'}]
    },
    {
        text: '电脑技巧',
        items: [{text: 'pcskill', link: '/pc/pcskill.md'}]
    }
];
