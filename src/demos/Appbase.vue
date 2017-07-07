<template>
	<div class="app-base text-primary">
		<mt-header :title="title"></mt-header>

		<transition name="vux-pop-out">
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
	export default{
		data(){
	    	return {
	      		selected:'appMine'
	    	}
	  	},
	  	methods:{
	    	changeTab(TabName){
	      		this.selected = TabName
	      		this.$router.push({name:TabName})
	    	},
	    	init(){
	      		this.selected = this.$route.name
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
	  				return this.$route.meta.name
	  			}
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
		.vux-pop-out-enter-active,
		.vux-pop-out-leave-active,
		.vux-pop-in-enter-active,
		.vux-pop-in-leave-active {
		  will-change: transform;
		  transition: all 500ms ease-in-out;
		  height: 100%;
		  /*top: 46px;*/
		  position: absolute;
		  backface-visibility: hidden;
		  perspective: 1000;
		}
		.vux-pop-out-enter {
		  opacity: 0;
		  transform: translate3d(-10rem, 0, 0);
		}
		.vux-pop-out-leave-active {
		  opacity: 0;
		  transform: translate3d(10rem, 0, 0);
		}
		.vux-pop-in-enter {
		  opacity: 0;
		  transform: translate3d(100%, 0, 0);
		}
		.vux-pop-in-leave-active {
		  opacity: 0;
		  transform: translate3d(-100%, 0, 0);
		}
	}
</style>