import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
Vue.use(Router)

const AppBase = resolve => require(['../demos/AppBase'],resolve)
const AppIndex = resolve => require(['../demos/AppIndex'],resolve)
const AppMine = resolve => require(['../demos/AppMine'],resolve)

const PaymentCode = resolve => require(['../demos/pay/PaymentCode'],resolve)
const KeyBoard = resolve => require(['../demos/pay/KeyBoard'],resolve)

var routerMaps = [
  {name:'AppBase',path:'/appbase',component:AppBase,children:[
      {name:'appIndex',path:'appindex',component:AppIndex,meta: { name:'Home' }},
      {name:'appMine',path:'appmine',component:AppMine,meta: { name:'' }},
      {name:'PaymentCode',path:'/paymentCode',component:PaymentCode,meta:{name:'我要付款'}},
      {name:'KeyBoard',path:'/keyBoard',component:KeyBoard,meta:{name:'移动端付款'}}
  ]},
  
	{path: '*', redirect: '/appbase/appindex'}
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    if(from.meta.keepAlive){
    	from.meta.savedPosition = document.body.scrollTop
    }
    return { x: 0, y: to.meta.savedPosition ||0}
  }
}

const router = new Router({
	mode:routerMode,
	scrollBehavior,
	routes:routerMaps
})

export default router