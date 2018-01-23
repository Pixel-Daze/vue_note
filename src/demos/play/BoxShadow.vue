<!-- box-shadow -->
<template>
	<div class="box-shadow">
		<!-- box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 -->
		<div class="eg" v-for="item in egList" :class="item"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				egList:['eg1','eg2','eg3','eg4','eg5','eg6']
			}
		}
	}
</script>
<style lang='scss'>
	$shadow-dis:10px;/* 模糊半径 */
	.box-shadow{
		padding-top: 0.25rem;
		.eg{
			width: 3rem;
			height: 3rem;
			float: left;
			margin: 1rem;
			background: #ace;
			border-radius: 50%;
		}
		.eg1{
			box-shadow: -10px 0 $shadow-dis/4 green,0 -10px $shadow-dis/4 yellow,10px 0 $shadow-dis/4 blue,0 10px $shadow-dis/4 red;
		}
		.eg2{
			box-shadow: -10px 0 $shadow-dis green,0 -10px $shadow-dis yellow,10px 0 $shadow-dis blue,0 10px $shadow-dis red;
		}
		.eg3{
			box-shadow: 0 0 5px blue,0 0 15px red;
		}
		.eg4{
			box-shadow: 0 0 15px blue,0 0 5px red;
		}
		.eg5{
			box-shadow: inset -10px 0 $shadow-dis green,inset 0 -10px $shadow-dis yellow,inset 10px 0 $shadow-dis blue,inset 0 10px $shadow-dis red;
		}
		.eg6{
			border-radius: 0;
			position: relative;
			&:before,&:after{
				content: '';
				position: absolute;
				z-index: -1;
				bottom: 15px;
				left: 10px;
				width: 50%;
				height: 20%;
				box-shadow: 0 15px 10px rgba(125,125,125,.8);
				transform: rotate(-5deg);
			}
			&:after{
				right: 10px;
				left: auto;
				transform: rotate(5deg);
			}
		}
		
	}
</style>