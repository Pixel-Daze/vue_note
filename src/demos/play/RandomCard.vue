<!-- 随机选项卡 -->
<template>
	<div class="random-cards">
		<transition-group  name="list" tag="span">
			<span class="cell" :key="card" v-for="card in cards" :style='{background:card}'>{{card}}</span>
		</transition-group>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				cards:[]
			}
		},
		methods:{
			loadInfo(){
				const ele = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
				
				let vm = this,count = 99
				let timer = setInterval(()=>{
					vm.cards.push(vm.randomColor(ele))
					count--
					if(count==0) clearInterval(timer)
				},200)
			},
			randomColor(arr){
				let str = '#'
				for(let i = 0;i < 6;i++){
					str += arr[Math.floor(Math.random()*16)]
				}
				return str
			}
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.random-cards{
		.cell{
			display: inline-block;
			width: 3.333333rem;
			height: 1.333333rem;
			color: #fff;
			font-size: 0.373333rem;
			line-height: 1.333333rem;
			text-align: center;
		}
		.list-enter-active, .list-leave-active {
		  transition: all 1s;
		}
		.list-enter, .list-leave-to {
		  opacity: 0;
		  transform: translateX(0.533333rem);
		}
	}
</style>