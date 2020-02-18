# scss常用mixins

## 单/多行省略

```scss
/**
 * 多行省略
 * @param {Number} $lines 行数
 * @example @include mLineClamp(2);
 */
@mixin mLineClamp($lines){
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
}

/**
 * 单行省略
 * @param {Number} $width 单行宽度
 * @example @include sLineClamp(100px);
 */
@mixin sLineClamp($width){
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: $width;
}
```