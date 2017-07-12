import _ from 'lodash'

export default {
	install(Vue){
		Object.defineProperty(Vue.prototype,'_',{value:_})
	}
}