<template>
	<div class="app-mine">
		<!-- <mt-header title="Mine"></mt-header> -->
	appmine</div>
</template>
<script>
	export default {
		name:'AppMine',
		methods:{
			init(){
				console.log(this.$route)
			}
		},
		created(){
			// this.init()
			
			console.log(this.$route.meta.name)
		},
		beforeRouteEnter (to, from, next) {
		    if(to){
		    	to.meta.name ='Love'
		    }
		    next()
		}

	}
</script>
<style lang='scss'></style>