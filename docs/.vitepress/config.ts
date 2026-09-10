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
    },

    /*
     * 规避 Windows 下 dev server 偶发 EBUSY 崩溃。
     *
     * 部分程序写入文件时采用"原子写入"：先在同目录的私有临时目录里写
     * `.foo.html.<PID>.<UUID>.tmpdir/foo.html.tmp`，写完再 rename 覆盖目标文件。
     * Vite 的 fs.watch 会去监听这个中转文件，而此刻它已被占用或已被删除，
     * Windows 只能返回 EBUSY（Unix 允许 watch 已删除的文件，故不报错）；
     * Vite 又没有监听 FSWatcher 的 'error' 事件，未捕获异常会直接终止 dev server。
     *
     * 这里让 watcher 直接无视这类临时文件/目录（glob 与正则双保险，
     * 正则同时兼容 / 与 \ 两种路径分隔符）。
     */
    vite: {
        server: {
            watch: {
                ignored: [
                    '**/.*.tmpdir/**',
                    '**/*.tmpdir/**',
                    '**/*.tmp',
                    /\.tmpdir([\\/]|$)/,
                    /\.tmp([\\/]|$)/
                ]
            }
        }
    }
})
