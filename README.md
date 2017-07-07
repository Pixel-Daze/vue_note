# lodash_test

> 对于lodash库的一些探索，也是对手头项目的一些总结

### 技术栈
*FastClick*
> 解决移动端300ms点击延时

```
/* fastclick */
import FastClick from 'fastclick'

if('addEventListerner' in document){
	document.addEventListerner('DOMContentLoaded',function(){
		FastClick.attach(document.body)
	},false)
}
```
*flexible_css.js*
>实现H5页面的终端适配

```
/* flexible.js */
import '../static/lib/js/flexible_css.js'
```

*mint-ui*
>移动端基础UI库（可自行替换如vux）

```
/* mint */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
```

*iconfont*
>字体图标库

```
/* iconfont */
import '../static/lib/icon-font/iconfont.css'
```