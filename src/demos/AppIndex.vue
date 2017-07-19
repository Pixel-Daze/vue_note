<template>
	<div class="app-index">
		<grid :rows="3" v-for="menuItem in menu" :key="menuItem">
			<grid-item class="grid-center" v-for="item in menuItem" :key="item.name" @click.native="goPath(item.path)"  :label="item.name">
				<span slot="icon" :class="item.icon"></span>
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
	height: calc(100% - 101px);
	width: 100%;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	::-webkit-scrollbar {
		width: 0;
		display: none;
	}
	::-webkit-scrollbar-button:horizontal:decrement:hover {
		display: none;
		width: 0;
	}
}
</style>