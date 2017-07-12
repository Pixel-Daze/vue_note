<template>
	<div class="app-mine">
	appmine</div>
</template>
<script>
	export default {
		name:'AppMine',
		methods:{
			Team(){
				const persons = []
				return {
					push:person=>persons.push(person),
					getAll:()=>persons
				}
			}
		},
		created(){
			const team = this.Team()
			console.log(team)
			team.push('张三')
			console.log(team.getAll())
		},
		beforeRouteEnter (to, from, next) {
		    if(to){
		    	to.meta.name ='Love'
		    }
		    next()
		}

	}
</script>
<style lang='scss'>
	.app-mine{
		/*height: 100%;*/
		/*background: green;*/
	}
</style>