import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
Vue.use(Router)

const AppIndex = resolve => require(['../demos/AppIndex'],resolve)

const Grid = resolve => require(['../demos/Grid'],resolve)

const routerMaps = [
	{name:'Index',path:'/appindex',component:AppIndex},
	{path: '*', redirect: '/appindex'}
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
	// scrollBehavior,
	routes:routerMaps
})

export default router