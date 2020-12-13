##### 安装
> cnpm i -S @dsaco/rc

##### 引入
```js
import { Button } from '@dsaco/rc';
// 按需加载
// import Button from '@dsaco/rc/lib/Button';

import '@dsaco/rc/lib/styles.css'
```



##### options
- type
    - primary
    - secondary
- outline
- link
- disabled
- rippleColor
    - rgba(x, x ,x ,0.x)

- [x] [Button](#Button)
- [x] [Message](#Message)
- [x] [Notice](#Message)
- [x] [Progress](#Progress)
- [x] [Ripple](#)
- [x] [Img](#Img)
- [ ] [Switch](#)
- [ ] [Pagination](#Pagination)
- [ ] [Modal](#)
- [ ] Select
- [ ] Input
- [ ] tagsInput
- [ ] Autocomplete
- [ ] Upload
- [ ] Tooltip




# Button


属性 | 说明 | 类型 | 默认值
- | - | - | -
type | 类型 | ripple、 | ripple
theme | 主题 | primary、secondary | -
link | 按钮背景透明 | boolean | false
outline | 是否边框形式 | boolean | false
disabled | 是否禁用 | boolean | false
rippleColor | ripple模式下,自定义主题的涟漪颜色 | rgba | rgba(0, 0, 0, 0.25)


```js
import { Button } from '@dsaco/rc';
import '@dsaco/rc/lib/styles.css';
```

```html
<Button>default</Button>
<Button link>default link</Button>
<Button outline>default outline</Button>

<Button theme="primary">primary</Button>
<Button theme="primary" link>
    primary link
</Button>
<Button theme="primary" outline>
    primary outline
</Button>

<Button theme="secondary">secondary</Button>
<Button theme="secondary" link>
    secondary link
</Button>
<Button theme="secondary" outline>
    secondary outline
</Button>
```

自定义样式
```scss
$ds-button-theme: (
	'primary': #2196f3,
	'secondary': #e10050,
	'purple': purple,
);
@import '~@dsaco/rc/lib/Button/style.scss';
```
```html
<Button theme="purple">自定义颜色</Button>
<Button theme="purple" link rippleColor="rgba(0, 255, 255, .25)">
    自定义颜色 link
</Button>
<Button theme="purple" outline rippleColor="rgba(255, 0, 128, .25)">
    自定义颜色 outline
</Button>
```