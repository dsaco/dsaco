### tooltip.scss
##### install
```
npm i -S @dsaco/dscss
```
##### usage
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
##### default
- $ds-tooltip-bg: rgba(0, 0, 0, 0.75);
- $ds-tooltip-color: white;
- $ds-tooltip-size: 8px;
- $ds-tooltip-attr: aria-label;