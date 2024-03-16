import {defineConfig} from 'vitepress'
import { head, nav } from './configs'


export default defineConfig({
    // 打包输出目录
    outDir: '../dist',

    // 站点语言标题等
    lang: 'zh-CN',
    title: '乐呜瑞',
    description: '记录前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
    head,

    /* 主题配置 */
    themeConfig: {
        i18nRouting: false,

        logo: 'logo.png',

        nav,
        sidebar: {},
        /* 右侧大纲配置 */
        outline: {
            level: 'deep',
            label: '本页目录'
        },

        socialLinks: [{icon: 'github', link: 'https://github.com/jsonwu5/jsonwu5.github.io'}],

        footer: {
            message: '如有转载或 CV 的请标注本站原文地址',
            copyright: 'Copyright © 2020-present JasonWu'
        },

        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',

        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    }
})
