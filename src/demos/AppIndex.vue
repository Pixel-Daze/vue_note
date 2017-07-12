<template>
	<div class="app-index">
		<h3>Grid</h3>
		<grid :rows="3" v-for="i in 2">
			<grid-item class="grid-center" v-for="i in 3">
				{{i}}dsajjfds
			</grid-item>
		</grid>
	</div>
</template>
<script>
	import {Grid,GridItem} from '../components/grid'
	import * as baseApi from '../api/baseApi'
	export default {
		name:'AppIndex',
		methods:{
			loadInfo(){
				baseApi.getIndexData()
			}
		},
		components:{
			Grid,
			GridItem
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
.app-index{
	/*background: #d6d6d6;*/
}
h3{
	/*background: #c00;*/
}
	.grid-center{
		text-align: center;
	}
</style>