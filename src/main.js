import Vue from 'vue'
import App from './App'
import router from './router'

/* fastclick */
import FastClick from 'fastclick'

if('addEventListerner' in document){
	document.addEventListerner('DOMContentLoaded',function(){
		FastClick.attach(document.body)
	},false)
}

/* flexible.js */
import '../static/lib/js/flexible_css.js'

/* mint */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

/* iconfont */
import '../static/lib/icon-font/iconfont.css'

/* basic style */
import '../static/lib/css/basic.scss'
/* 1px style */
import '../static/lib/css/pixel-1px.scss'

/* ExtendPlugin */
import ExtendPlugin from './plugins/vue.ext.js'
Vue.use(ExtendPlugin)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
