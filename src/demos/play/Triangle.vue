<template>
	<div class="triangle">
		<h3>初始正方形盒子</h3>
		<div class="init-box animate"></div>
		<h3>左右下透明的盒子</h3>
		<p>本质还是正方形，占用文档流</p>
		<div class="trans-box animate"></div>
		<h3>正确的三角形-上下左右</h3>
			<span v-for="shape in shapes":key="shape" :class="[shape.shape,shape.direction?shape.direction:'',{ animate: shape.animate}]"></span>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				shapes:[
					{
						'shape':'tri',
						'direction':'top',
						'animate':true
					},
					{
						'shape':'tri',
						'direction':'bottom',
						'animate':true
					},
					{
						'shape':'tri',
						'direction':'left',
						'animate':true
					},
					{
						'shape':'tri',
						'direction':'right',
						'animate':true
					}
				]
			}
		}
	}
</script>
<style lang='scss'>
	$border-width:1.5rem;
	$tri-border:$border-width solid transparent;
	.triangle{
		height: calc(100% - 46px);
		padding: 0.4rem;
		text-align: center;
		h3,p{
			line-height: 1rem;
			height: 1rem;
		}
		.init-box,.trans-box{
			display: inline-block;
		}
		.tri{
			width: 0;height: 0;
			display: block;
			margin: .8rem auto;
		}
		.init-box{
			border-top: $border-width solid red;
			border-bottom: $border-width solid green;
			border-left: $border-width solid yellow;
			border-right: $border-width solid blue;
		}
		.trans-box{
			border:$tri-border;
			border-top: $border-width solid red;
		}
		.tri.bottom{
			border-top: $border-width solid red;
			border-left: $tri-border;
			border-right: $tri-border;
		}
		.tri.top{
			border-bottom: $border-width solid green;
			border-left: $tri-border;
			border-right: $tri-border;
		}
		.tri.left{
			border-right: $border-width solid yellow;
			border-top: $tri-border;
			border-bottom: $tri-border;
		}
		.tri.right{
			border-left: $border-width solid blue;
			border-top: $tri-border;
			border-bottom: $tri-border;
		}
		.animate{
			animation-name: stretch;
			animation-duration: 1s;
			animation-timing-function: ease-in-out;
		}
		@keyframes stretch {
		  	0% {
		    	transform: scale(.1) rotate(0);
		  	}
		  	100% {
		    	transform: scale(1) rotate(1080deg);
		  	}
		}
	}
</style>