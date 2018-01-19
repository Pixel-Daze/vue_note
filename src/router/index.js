import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
Vue.use(Router)

const AppBase = resolve => require(['../demos/AppBase'],resolve)
const AppIndex = resolve => require(['../demos/AppIndex'],resolve)
const AppMine = resolve => require(['../demos/AppMine'],resolve)

const PaymentCode = resolve => require(['../demos/pay/PaymentCode'],resolve)
const KeyBoard = resolve => require(['../demos/pay/KeyBoard'],resolve)
const KeyboardNum = resolve => require(['../demos/pay/KeyboardNum'],resolve)

/* @desc:特殊用途上 */
const FilterBar = resolve => require(['../demos/entity/FilterBar'],resolve)

/*play系列*/
const RandomCard = resolve => require(['../demos/play/RandomCard'],resolve)
const Triangle = resolve => require(['../demos/play/Triangle'],resolve)
const SvgFir = resolve => require(['../demos/play/SvgFir'],resolve)
const Font = resolve => require(['../demos/play/Font'],resolve)

var routerMaps = [
  {name:'AppBase',path:'/appbase',component:AppBase,children:[
      {name:'appIndex',path:'appindex',component:AppIndex,meta: { name:'Home' }},
      {name:'appMine',path:'appmine',component:AppMine,meta: { name:'' }},
      {name:'PaymentCode',path:'/paymentCode',component:PaymentCode,meta:{name:'我要付款'}},
      {name:'KeyBoard',path:'/keyBoard',component:KeyBoard,meta:{name:'移动端付款'}},
      {name:'RandomCard',path:'/randomCard',component:RandomCard,meta:{name:'随机选项卡'}},
      {name:'Triangle',path:'/triangle',component:Triangle,meta:{name:'三角形探究'}},
      {name:'KeyboardNum',path:'/keyboardNum',component:KeyboardNum,meta:{name:'纯数字键盘'}},
      {name:'FilterBar',path:'/filterBar',component:FilterBar,meta:{name:'条件筛选条'}},
      {name:'SvgFir',path:'/svgFir',component:SvgFir,meta:{name:'svg动画'}},
      {name:'Font',path:'/font',component:Font,meta:{name:'Font'}}
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
	// mode:routerMode,
	scrollBehavior,
	routes:routerMaps
})

export default router