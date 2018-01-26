<!-- css animation -->
<template>
	<div class="animation">
		<div class="demo1"></div>
		<a href="" class="btn">发光的button</a>
		<span href="" class="box" :class="{round:round}" @click="trans"></span>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				round:false
			}
		},
		methods:{
			trans(){
				this.round = !this.round
			}
		}
	}
</script>
<style lang='scss'>
	.animation{
		height: calc(100% - 46px);
		text-align: center;
		padding: 0.266667rem;
		.demo1{
			width: 50px;
			height: 50px;
			margin-left: 100px;
			background: red;
			animation: 'wobble' 10s ease-in-out 2s infinite alternate;
		}

		@keyframes wobble{
			0%{
				margin-left: 100px;
				background: red;
			}
			40%{
				margin-left: 250px;
				background: orange;
			}
			60%{
				margin-left: 0px;
				background: blue;
			}
			100%{
				margin-left: 100px;
				background: red;
			}
		}

		a.btn{
			background: #60cb1b;
			font-size: 16px;
			padding: 10px 15px;
			color: #fff;
			text-align: center;
			text-decoration: none;
			font-weight: bold;
			text-shadow: 0 -1px 1px rgba(0,0,0,.3);
			border-radius: 5px;
			display: inline-block;
			margin: 0.266667rem auto;
			box-shadow: 0 0 5px rgba(255,255,255,.6) inset,0 0 3px rgba(220,120,200,.8);
			animation: 'buttonLight' 5s infinite;
		}

		@keyframes buttonLight{
			0%{
				background: rgba(96,203,27,.4);
				color: rgba(255,255,255,1);
				box-shadow: 0 0 5px rgba(255,255,255,.3) inset,0 0 3px rgba(220,120,200,.3);
			}
			25%{
				background: rgba(96,203,27,.8);
				color: rgba(255,255,255,.9);
				box-shadow: 0 0 10px rgba(255,255,255,.5) inset,0 0 8px rgba(220,120,200,.8);
			}
			50%{
				background: rgba(96,203,27,1);
				color: rgba(255,255,255,.8);
				box-shadow: 0 0 5px rgba(255,255,255,.3) inset,0 0 3px rgba(220,120,200,1);
			}
			75%{
				background: rgba(96,203,27,.8);
				color: rgba(255,255,255,.9);
				box-shadow: 0 0 10px rgba(255,255,255,.5) inset,0 0 8px rgba(220,120,200,.8);
			}
			100%{
				background: rgba(96,203,27,.4);
				color: rgba(255,255,255,1);
				box-shadow: 0 0 5px rgba(255,255,255,.3) inset,0 0 3px rgba(220,120,200,.3);
			}
		}

		span.box{
			display: block;
			width: 50px;
			height: 50px;
			background: red;
			margin: 50px auto 0;
		}
		span.round{
			border-radius: 50%;
			background: green;
			animation: 'round' 10s ease infinite;
		}
		@keyframes round{
			0%{
				transform: rotate(36deg);
				border-radius: 2px;
			}
			10%{
				transform: rotate(36*2deg);
				border-radius: 2*2px;
			}
			20%{
				transform: rotate(36*3deg);
				border-radius: 2*3px;
			}
			30%{
				transform: rotate(36*4deg);
				border-radius: 2*4px;
			}
			40%{
				transform: rotate(36*5deg);
				border-radius: 2*5px;
			}
			55%{
				transform: rotate(36*6deg);
				border-radius: 2*6px;
			}
			65%{
				transform: rotate(36*7deg);
				border-radius: 2*7px;
			}
			75%{
				transform: rotate(36*8deg);
				border-radius: 2*8px;
			}
			85%{
				transform: rotate(36*9deg);
				border-radius: 2*9px;
			}
			100%{
				transform: rotate(36*10deg);
				border-radius: 25px;
			}
		}

	}
</style>