import Vue from 'vue'
import App from './App'
import router from './router'

/* fastclick */
import FastClick from 'fastclick'

FastClick.attach(document.body)

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

/* AjaxPlugin */
import AjaxPlugin from './plugins/ajax'
Vue.use(AjaxPlugin)

/* lodashPlugin */
import _ from './plugins/lodash'
Vue.use(_)

/* dev-alloylever */
import { alloyDebug } from './service/alloyDebugService'

router.beforeEach((to,from,next)=>{
    try{
        MessageBox.close()
    }catch(e){

    }
    alloyDebug(to,next)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
