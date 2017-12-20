<template>
	<div class="filter">
		<filter-bar v-if="filterData.length>0" top="46" :filterData=filterData></filter-bar>
	</div>
</template>
<script>
	import {FilterBar} from '../../components/filterBar'
	import * as api from '../../api/baseApi'
	export default {
		data(){
			return {
				filterData:[]	
			}
		},
		components:{FilterBar},
		methods:{
			loadInfo(){
				let vm = this
				api.getFilterData().then(resp=>{
					if(resp.data.result==0){
						vm.filterData = resp.data.data
					}
				})
			}
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>