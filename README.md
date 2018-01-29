# vue_note

> 主体是移动端vue项目，内容包括vue移动端必要的库、vue项目基础架构、移动端ui库非通用组件实现、基础前端知识，[在线预览地址](https://pixel-daze.github.io/vue_note/#/appbase/appindex)

### 技术栈
*FastClick*
> 解决移动端300ms点击延时

```
import FastClick from 'fastclick'

FastClick.attach(document.body)
```
*flexible_css.js*
>实现H5页面的终端适配

```
import '../static/lib/js/flexible_css.js'
```

*mint-ui*
>移动端基础UI库（可自行替换如vux）

```
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
```

*iconfont*
>字体图标库

```
import '../static/lib/icon-font/iconfont.css'
```

*axios*
>ajax
```
import axios form 'axios'
```

*AlloyLever*
>移动端调试面板，在开发环境开启，配合vue-router使用
```
require('alloylever')
import { alloyDebug } from './service/alloyDebugService'
```

*lodash*
>操作各种类型的数据结构
```
import _ from 'lodash'

export default {
	install(Vue){
		Object.defineProperty(Vue.prototype,'_',{value:_})
	}
}

import _ from './plugins/lodash'
Vue.use(_)
```

### TODO

- [X] header's title transition
- [X] router-view transiton
- [X] grid and grid-item component
- [X] main container overflow-y
- [ ] 支付条形码以及二维码页面
- [ ] 支付付款页
- [X] 支付密码页

### 玩具页面
>一些css和jsdemo,偏向简单图形化,愉悦心情

- [X] randomCards 随机选项卡
- [X] triangle 三角形探究
- [X] Svg svg动画
- [X] Font 映入外部字体
- [X] css渐变 探索线性渐变和径向渐变
- [X] 图层投影
- [X] css animation
- [X] 制作省略号
