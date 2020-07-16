### tooltip.scss
##### 安装
```
npm i -S @dsaco/dscss
```
##### 引入 配置默认值
```
// .scss
$ds-tooltip-bg: pink;
$ds-tooltip-color: yellow;
$ds-tooltip-size: 6px;
$ds-tooltip-attr: aria-label;
@import "@dsaco/dscss/tooltip";

// .html
<span class="ds-tooltip" aria-label="瑞秋·麦克亚当斯">name</span>
```
##### 默认值
- $ds-tooltip-bg: rgba(0, 0, 0, 0.75);
- $ds-tooltip-color: white;
- $ds-tooltip-size: 8px;
- $ds-tooltip-attr: aria-label;

##### 方向
- ds-tooltip: 上方(默认值)
- ds-tooltip--bottom: 下方
- ds-tooltip--left: 左方
- ds-tooltip--right: 右方