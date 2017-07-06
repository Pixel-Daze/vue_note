<template>
	<div class="app-base text-primary">
		<router-view></router-view>
        <mt-tabbar v-model="selected" fixed class="ratain-border-top">
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
	    		console.log(this.$route.name)
	      		this.selected = this.$route.name
	    	}
	  	},
	  	mounted(){
	    	this.init()
	  	}
	}
</script>
<style lang='scss'>
	.app-base{
	}
</style>