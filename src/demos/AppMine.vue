<template>
	<div class="app-mine">
	appmine</div>
</template>
<script>
	export default {
		name:'AppMine',
		methods:{
		},
		created(){
			
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