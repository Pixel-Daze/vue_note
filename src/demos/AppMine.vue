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
			},
			Arraydrop(){
				let init = []
				for(let i=0;i<1000000;i++){
					init.push(Math.ceil(Math.random()*100))
				}
				init = this.unique1(init)
				console.log(init)
			},
			unique1(arr){
				let n = []
				let start = new Date()
				arr.forEach(item=>{
					if(n.indexOf(item)==-1){
						n.push(item)
					}
				})
				let end = new Date()
				console.log(end-start)
				return n
			}
		},
		created(){
			// const team = this.Team()
			// console.log(team)
			// team.push('张三')
			// console.log(team.getAll())
			this.Arraydrop()
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