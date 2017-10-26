# lodash_test

> 对于lodash库的一些探索，也是对手头项目的一些总结

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
>一些css和jsdemo,偏向简单图形化,愉悦信息

- randomCards 随机选项卡
