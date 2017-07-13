<template>
	<div class="app-index">
		<h3>Grid</h3>
		<grid :rows="3" v-for="menuItem in menu" :key="menuItem">
			<grid-item class="grid-center" v-for="item in menuItem" :key="item.name" @click.native="goPath(item.path)">
				{{item.name}}
			</grid-item>
		</grid>
	</div>
</template>
<script>
	import {Grid,GridItem} from '../components/grid'
	import * as baseApi from '../api/baseApi'
	export default {
		name:'AppIndex',
		data(){
			return {
				menu:[]
			}
		},
		methods:{
			loadInfo(){
				baseApi.getIndexData().then((resp)=>{
					if(resp.data.result==0){
						this.menu = _.chunk(resp.data.data,3)
					}
				})
			},
			goPath(path){
				this.$router.push({path:path})
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