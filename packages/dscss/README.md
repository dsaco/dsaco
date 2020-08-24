##### 安装
```
npm i -S @dsaco/dscss
```

### tooltip.scss
##### 引入
```
// .scss
// 默认值 8px rgba(0, 0, 0, 0.75) white aria-label;
$ds-tooltip-size: 8px;
$ds-tooltip-bg: black;
$ds-tooltip-color: white;
$ds-tooltip-attr: data-title;
@import "@dsaco/dscss/tooltip";

// .html
<span class="ds-tooltip" data-title="瑞秋·麦克亚当斯">name</span>
```
##### 方向
- ds-tooltip: 上方(默认值)
- ds-tooltip--bottom: 下方
- ds-tooltip--left: 左方
- ds-tooltip--right: 右方

### spacing.scss
```
// .scss
// 默认值 1rem;
$ds-spacer: 16px;
@import "@dsaco/dscss/spacing";
// .html
<span class="p-0"></span>
<span class="px-1"></span>
<span class="py-2"></span>
<span class="ml-3"></span>
<span class="my-4"></span>
<span class="m-5"></span>
```