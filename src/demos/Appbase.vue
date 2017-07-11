<template>
	<div class="app-base text-primary">
		<p-header v-show="title"
		:title="title" 
		transition="pixel-header-fade-in-left"
		:right-options="rightOptions"
		:left-options="leftOptions"
		@on-click-more="onClickMore">
			<!-- <a slot="right">更多</a> -->
		</p-header>
		<transition name="pixel-pop-out">
			<router-view></router-view>	
		</transition>
		
        <mt-tabbar v-model="selected" class="pixel-1px-t">
          	<mt-tab-item id="appIndex"  @click.native="changeTab('appIndex')">
            	<i slot="icon" class="icon iconfont icon-shouye"></i>
            	首页
          	</mt-tab-item>
          	<mt-tab-item id="appMine"  @click.native="changeTab('appMine')">
            	<i slot="icon" class="icon iconfont icon-shouye1"></i>
            	我的
          	</mt-tab-item>
        </mt-tabbar>
	</div>
</template>
<script>
	import { PHeader }  from '../components/PHeader'
	import { Grid } from '../components/grid'
	export default{
		name:'App-base',
		data(){
	    	return {
	      		selected:'appMine'
	    	}
	  	},
	  	components:{
	  		PHeader,
	  		Grid
	  	},
	  	methods:{
	    	changeTab(TabName){
	      		this.$router.push({name:TabName})
	    	},
	    	init(){
	      		this.selected = this.$route.name
	    	},
	    	onClickMore(){
	    		console.log('more')
	    	}
	  	},

	  	computed:{
	  		title (){
	  			// if(this.$route.name === 'appIndex') return 'Home'
	  			// if(this.$route.name === 'appMine') return 'Mine'
	  			return this.componentName
	  		},
	  		componentName (){
	  			if(this.$route.path){
	  				// 检测路由控制tab
	  				this.selected = this.$route.name
	  				if(this.$route.meta.name!=''||this.$route.meta.name!=null){
	  					return this.$route.meta.name
	  				}else{
	  					return false
	  				}
	  				
	  			}
	  		},
	  		rightOptions (){
	  			return { showMore:false }
	  		},
	  		leftOptions(){
	  			return { showBack:this.$route.path !== '/appbase/appindex' }	
	  		}
	  	},
	  	mounted(){
	    	this.init()
	  	}
	}
</script>
<style lang='scss'>
	.app-base{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.pixel-pop-out-enter-active,
		.pixel-pop-out-leave-active,
		.pixel-pop-in-enter-active,
		.pixel-pop-in-leave-active {
		  will-change: transform;
		  transition: all 500ms ease-in-out;
		  height: 100%;
		  position: absolute;
		  backface-visibility: hidden;
		  perspective: 1000;
		}
		.pixel-pop-out-enter {
		  opacity: 0;
		  transform: translate3d(-10rem, 0, 0);
		}
		.pixel-pop-out-leave-active {
		  opacity: 0;
		  transform: translate3d(10rem, 0, 0);
		}
		.pixel-pop-in-enter {
		  opacity: 0;
		  transform: translate3d(100%, 0, 0);
		}
		.pixel-pop-in-leave-active {
		  opacity: 0;
		  transform: translate3d(-100%, 0, 0);
		}
	}
</style>