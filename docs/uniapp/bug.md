# UniApp踩坑记录

## 在组件中监听页面生命周期

```js
created() {
    // 获取当前组件所做页面实例
    let currentPages = getCurrentPages();
    const page = currentPages[currentPages.length-1];
    // 监听上拉加载事件
    page.onReachBottom = (e) => {
        // do something
    };
    // 监听下拉刷新事件
    page.onPullDownRefresh = () => {
        // do something
    };
    // 监听页面初始化事件
    page.onLoad = (e) => {
        // do something
    };
    // 其他事件监听
}
```