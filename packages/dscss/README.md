##### 安装

```
npm i -S @dsaco/dscss
```

### tooltip.scss

| 属性               | 功能                        | 默认值              |
| ------------------ | --------------------------- | ------------------- |
| \$ds-tooltip-size  | tooltip 与 container 的距离 | 8px                 |
| \$ds-tooltip-bg    | 背景色                      | rgba(0, 0, 0, 0.75) |
| \$ds-tooltip-color | 字体颜色                    | white               |
| \$ds-tooltip-attr  | 展示的文字来自哪个属性      | aria-label          |

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

-   ds-tooltip: 上方(默认值)
-   ds-tooltip--bottom: 下方
-   ds-tooltip--left: 左方
-   ds-tooltip--right: 右方

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
