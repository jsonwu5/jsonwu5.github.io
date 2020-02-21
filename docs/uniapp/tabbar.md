# 自定义tabbar

> 在首页加载底部多个tabbar页面组件，点击tabbar的item时切换对应页面组件来模拟原生tabbar切换效果，无闪屏等问题。

## 兼容平台

| 平台  | 是否兼容  |
| ------------ | :------------: |
| Android  | 是  |
| iOS  | 是  |
| H5  | 是  |
| 微信小程序  | 是  |
| QQ小程序  | 是  |
| 支付宝小程序  | 是  |
| 字节跳动小程序  | 是  |
| 百度小程序  | 是  |

## Code Pen示例

> Code Pen中代码语法经过转换，与uni-app代码不同，实际使用请参考下方index源码 

[Code Pen地址](https://codepen.io/jsonwu5/pen/VwLKMBw "code pen")
  
<iframe  
height=667 
width=375 
src="https://codepen.io/jsonwu5/full/VwLKMBw"  
frameborder=1  
allowfullscreen>
</iframe>

## 在移动端预览

![3nwGCj.png](https://s2.ax1x.com/2020/02/21/3nwGCj.png)

## page.json配置

> 这里需要去掉tabbar的相关配置，才能使用自定义tabbar

```json
{
	"pages": [
        {
          "path": "pages/index/newIndex"
        }
    ],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "",
		"navigationBarBackgroundColor": "#FFFFFF",
		"backgroundColor": "#f8f8f8"
	}
}

```

## index源码

```vue
<template>
	<view id="app" class="app">
		<page text="A" v-if="PageCur == 'index'" color="white"></page>
		<page text="B" v-if="PageCur == 'category'" color="red"></page>
		<page text="C" v-if="PageCur == 'cart'" color="blue"></page>
		<page text="D" v-if="PageCur == 'user'" color="yellow"></page>
		<page text="E" v-if="PageCur == 'diypage'" color="green"></page>
		<view class="cu-bar tabbar bg-white shadow foot" v-if="tabbar.length > 0">
			<view class="action" @click="NavChange(item)" :data-cur="item.isSystem" v-for="(item, index) in tabbar" :key="index">
				<view class="cuIcon-cu-image">
					<image class="image" :src="item.imageUrl"></image>
				</view>
				<view :class="item.indexCur == indexCur ? 'text-select' : 'text-normal'">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import page from "@/components/page.vue";
export default {
  components: {
    page
  },
  data() {
      return {
        PageCur: "index", // 当前页面类型
        indexCur: 0, // 当前页面下标 默认为第一个
        tabbar: [
          {
            name: "首页",
            isShow: true,
            iconId: "2a78cfc4-d8ad-1485-a64d-39f34aaac5b6",
            imageUrl: "https://s2.ax1x.com/2020/02/21/3nbw1s.png",
            target: "",
            targetId: 0,
            indexCur: 0,
            isSystem: "index"
          },
          {
            name: "分类",
            isShow: true,
            iconId: "605b94c4-324f-0c3f-f002-39f34aaae633",
            imageUrl: "https://s2.ax1x.com/2020/02/21/3nbdpj.png",
            target: "",
            targetId: 0,
            indexCur: 1,
            isSystem: "category"
          },
          {
            name: "购物车",
            isShow: true,
            iconId: "b3f58662-39dd-e6fa-0674-39f34aaafbdb",
            imageUrl: "https://s2.ax1x.com/2020/02/21/3nbUhQ.png",
            target: "",
            targetId: 0,
            indexCur: 2,
            isSystem: "cart"
          },
          {
            name: "我的",
            isShow: true,
            iconId: "c69cc52c-db0e-bddf-291e-39f34aab1c41",
            imageUrl: "https://s2.ax1x.com/2020/02/21/3nbNtg.png",
            target: "",
            targetId: 0,
            indexCur: 3,
            isSystem: "user"
          }
        ]
      };
    },
    computed: {
      // 当前选择的item数据
      cuItem() {
        if (this.tabbar && this.tabbar.length > 0) {
          return this.tabbar[this.indexCur];
        }
        return {};
      }
    },
    methods: {
      NavChange: function(item) {
        console.log(item);
        this.PageCur = item.isSystem;
        this.indexCur = item.indexCur;
      }
    }
}
</script>

<style>
page {
	height: 100%;
	width: 100%;
	padding: 0;
}
</style>
<style lang="scss">
bodey,
.page,
page
.app {
  height: 100%;
  width: 100%;
  padding: 0;
}
.cu-bar {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 100rpx;
  justify-content: space-between;
  &.bg-white {
    background-color: #ffffff;
    color: #666666;
  }
  &.tabbar {
    padding: 0;
    height: calc(100rpx + env(safe-area-inset-bottom) / 2);
    padding-bottom: calc(env(safe-area-inset-bottom) / 2);
    &.shadow {
      box-shadow: 0 -1rpx 6rpx rgba(0, 0, 0, 0.1);
    }
    .action {
      font-size: 22rpx;
      position: relative;
      flex: 1;
      text-align: center;
      padding: 0;
      display: block;
      height: auto;
      line-height: 1;
      margin: 0;
      background-color: inherit;
      overflow: initial;
      .text-select {
        color: #fa436a;
      }
      .text-normal {
        color: #c0c4cc;
      }
      [class*="cuIcon-"] {
        width: 50rpx;
        position: relative;
        display: block;
        height: auto;
        margin: 0 auto 10rpx;
        text-align: center;
        font-size: 40rpx;
      }
    }
  }
  .cuIcon-cu-image {
    margin: 0 auto;
    .image {
      max-width: 100%;
      position: relative;
      z-index: 0;
      width: 50rpx;
      height: 50rpx;
      display: inline-block;
    }
  }
  &.foot {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 998;
    box-shadow: 0 -1rpx 6rpx rgba(0, 0, 0, 0.1);
  }
}
</style>
```

## page组件源码

```vue
<template>
	<view class="page" :style="{'backgroundColor': color}">
		<view class="card">
			{{text}}
		</view>
		<!-- 底部占位，防止页面滚动到底部时，出现被tabbar遮挡的问题 -->
        <view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["text", "color"]
};
</script>

<style lang="scss">
.page, .card {
  width: 100%;
  height: 100%;
}
.card {
  font-size: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
// 底部tabbar占位css
.cu-tabbar-height {
  min-height: 100rpx;
  height: calc(100rpx + env(safe-area-inset-bottom) / 2);
}
</style>
```

## 兼容全面屏

> 兼容iPhone X等全面屏底部有返回按钮横条的机型

```scss
// 底部tabbar占位css
.cu-tabbar-height {
	min-height: 100rpx;
	height: calc(100rpx + env(safe-area-inset-bottom) / 2);
}
```
```safe-area-inset-bottom```是WebKit内置的css常量，比如为列表底部添加内边距避开安全区，在 iPhoneX 上列表底部会有内边距，在其他设备上没有内边距。

![3naOSI.png](https://s2.ax1x.com/2020/02/21/3naOSI.png)

## 参考文献

- [uni-app 全面屏、刘海屏适配（iphoneX适配）及安全区设置](https://ask.dcloud.net.cn/article/35564 "uni-app 全面屏、刘海屏适配（iphoneX适配）及安全区设置")
- [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/ "Designing Websites for iPhone X")
- [ColorUI-UniApp](https://ext.dcloud.net.cn/plugin?id=239 "ColorUI-UniApp")