# Painter
> 小程序生成图片库，轻松通过 json 方式绘制一张可以发到朋友圈的图片

> github：[https://github.com/Kujiale-Mobile/Painter](https://github.com/Kujiale-Mobile/Painter)

## 引入方式

1. 下载github里的插件包`/components/painter`

2. 在项目根目录创建`wxcomponents`文件夹

3. 将插件包文件夹放入创建好的`wxcomponents`文件夹下
   
   ![image.png](https://ae04.alicdn.com/kf/H752f7c57bc4d404f90dee1b9764fd1d3F.png)

4. 修改`pages.json`配置，在需要引入插件的页面下新增一条配置
    ```
    {
        "path": "pages/common/certificate/certificate",
        "style": {
            "navigationBarTitleText": "我的证书",
            "usingComponents": {
                "painter": "/wxcomponents/painter/painter"
            }
        }
    }
    ```
5. 使用可视化编辑器：[https://lingxiaoyi.github.io/painter-custom-poster/](https://lingxiaoyi.github.io/painter-custom-poster/)
   
   编辑好图文后点击`复制代码`,然后在页面文件下新增一个`data.js`文件，粘贴好刚刚复制的代码。
    
    ![image.png](https://ae01.alicdn.com/kf/H01c50aecc2124d6a8ce72885f763096d9.png)
    
    ```js
    export default class LastMayday {
        palette() {
            return ({
                "width": "654px",
                "height": "1000px",
                "background": "#FEF8F3",
                "views": [{
                        "type": "qrcode",
                        "content": "哈哈哈",
                        "css": {
                            "color": "#000000",
                            "background": "#ffffff",
                            "width": "200px",
                            "height": "200px",
                            "top": "779px",
                            "left": "29px",
                            "rotate": "0",
                            "borderRadius": "10px"
                        }
                    },
                    {
                        "type": "text",
                        "text": "扫码关注",
                        "css": {
                            "color": "#ff0000",
                            "background": "rgba(0,0,0,0)",
                            "width": "200px",
                            "height": "43.89999999999999px",
                            "top": "2px",
                            "left": "1113px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "1px",
                            "borderColor": "#000000",
                            "shadow": "10 10 5 #888888",
                            "padding": "0px",
                            "fontSize": "30px",
                            "fontWeight": "normal",
                            "maxLines": "2",
                            "lineHeight": "43.290000000000006px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "扫码关注",
                        "css": {
                            "color": "#ff0000",
                            "background": "rgba(0,0,0,0)",
                            "width": "200px",
                            "height": "43.89999999999999px",
                            "top": "2px",
                            "left": "1113px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "1px",
                            "borderColor": "#000000",
                            "shadow": "10 10 5 #888888",
                            "padding": "0px",
                            "fontSize": "30px",
                            "fontWeight": "normal",
                            "maxLines": "2",
                            "lineHeight": "43.290000000000006px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "扫码关注",
                        "css": {
                            "color": "#C87756",
                            "background": "rgba(0,0,0,0)",
                            "width": "30px",
                            "height": "175.10999999999996px",
                            "top": "787.94px",
                            "left": "254px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "30px",
                            "fontWeight": "normal",
                            "maxLines": "5",
                            "lineHeight": "43.290000000000006px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "1. 忌食辛辣刺激食物\n2. 忌运动量过大\n3. 戒烟戒酒，忌暴饮暴食",
                        "css": {
                            "color": "#C87756",
                            "background": "rgba(0,0,0,0)",
                            "width": "250px",
                            "height": "93.88px",
                            "top": "611px",
                            "left": "40px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "20px",
                            "fontWeight": "normal",
                            "maxLines": "6",
                            "lineHeight": "31.080000000000002px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "养生小贴士",
                        "css": {
                            "color": "#C87756",
                            "background": "rgba(0,0,0,0)",
                            "width": "200px",
                            "height": "42.89999999999999px",
                            "top": "537px",
                            "left": "42px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#C87756",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "30px",
                            "fontWeight": "bold",
                            "maxLines": "2",
                            "lineHeight": "43.290000000000006px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "webfontzk",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "分",
                        "css": {
                            "color": "#C87756",
                            "background": "rgba(0,0,0,0)",
                            "width": "130px",
                            "height": "185.89999999999998px",
                            "top": "708px",
                            "left": "484px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "130px",
                            "fontWeight": "normal",
                            "maxLines": "2",
                            "lineHeight": "187.59000000000003px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "webfontzkxw",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "text",
                        "text": "秋",
                        "css": {
                            "color": "#C87756",
                            "background": "rgba(0,0,0,0)",
                            "width": "130px",
                            "height": "185.89999999999998px",
                            "top": "580px",
                            "left": "463.5px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "130px",
                            "fontWeight": "normal",
                            "maxLines": "2",
                            "lineHeight": "187.59000000000003px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "webfontzkxw",
                            "textAlign": "left"
                        }
                    },
                    {
                        "type": "image",
                        "url": "https://static.fotor.com.cn/assets/res/pic/454d3884-b1d1-4059-a08b-18427f93c8eb.jpg?x-oss-process=image/resize,lfit,h_1200,w_1200/format,src",
                        "css": {
                            "width": "568.01px",
                            "height": "475.27px",
                            "top": "0px",
                            "left": "39.19px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "mode": "scaleToFill"
                        }
                    },
                    {
                        "type": "text",
                        "text": "请朋友们注意防寒保暖，小心着凉",
                        "css": {
                            "color": "#fff",
                            "background": "rgba(0,0,0,0)",
                            "width": "22px",
                            "height": "372.9000000000001px",
                            "top": "61px",
                            "left": "71px",
                            "rotate": "0",
                            "borderRadius": "",
                            "borderWidth": "",
                            "borderColor": "#000000",
                            "shadow": "",
                            "padding": "0px",
                            "fontSize": "22px",
                            "fontWeight": "normal",
                            "maxLines": "22",
                            "lineHeight": "24.42px",
                            "textStyle": "fill",
                            "textDecoration": "none",
                            "fontFamily": "",
                            "textAlign": "left"
                        }
                    }
                ]
            });
        }
    }
    
    ```

6. 在页面中使用组件
    ```vue
    <template>
     <view>
         <painter customStyle='position: absolute; left: -9999rpx;' 
         widthPixels="1000" :palette="painting" @imgErr="imgErr" @imgOK="onImgOK" />
         <image :src="shareImage" mode="widthFix" style="width: 100%;height: auto;"></image>
     </view>
    </template>
    
    <script>
    import painterData from './data.js';
    
    export default {
        data() {
            return {
                painting: {},
                shareImage: ''
            }
        },
        onLoad() {
            this.painting = new painterData().palette();
        },
        methods: {
            onImgOK(e) {
                console.log(e);
                this.shareImage = e.detail.path;
            },
            imgErr(e) {
                console.log(e);
            }
        }
    }
    </script>
    ```
