import Vue from 'vue'
import App from './App'
import router from './router'

/* mint */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

/* iconfont */
import '../static/lib/icon-font/iconfont.css'

/* basic style */
import '../static/lib/css/basic.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
