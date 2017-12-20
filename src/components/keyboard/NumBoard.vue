<!-- 基础支付数字键盘组件 -->
<template>
	<div ref="numBoard" class="num-board" :class="{active:active}">
		<div class="left">
			<span class="btn-cell pixel-1px-t pixel-1px-r">1</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">2</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">3</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">4</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">5</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">6</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">7</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">8</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">9</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">.</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r">0</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r" @click="toggleBoard">
				<span class="icon iconfont icon-num-end"></span>
			</span>
		</div>
		<div class="right">
			<div class="delete pixel-1px-t"><span class="icon iconfont icon-delete1"></span></div>
			<div class="ensure">确&nbsp;定</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'num-board',
		data(){
			return {
				active:false	
			}
		},
		methods:{
			toggleBoard(){this.active = !this.active}
		},
		mounted(){
			console.log(this.$refs.numBoard)
		}
	}
</script>
<style lang='scss'>
	.num-board{
		width: 100%;
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #f6f6f8;
		transition: all .3s ease;
		.left{
			flex: 3;
			.btn-cell{
				width: 33.33%;
				height: 58px;
				float: left;
				font-size: 24px;
				padding: 15px 0;
				text-align: center;
				display: inline-block;
				&:active{
					background-color:#ececec;
				};
			}
			.icon-num-end{
				font-size: 28px;
			}
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			>div{
				flex: 1;
			}
			.delete,.ensure{
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.delete{
				.icon-delete1{
					font-size: 26px;
				}
				&:active{
					background-color:#ececec;
				}
			}
			.ensure{
				font-size: 18px;
				color: #fcfcfc;
				margin: 75px;
				background-color: #2b91e3;
				&:active{
					background-color:rgba(43,145,227,.8);
				}
			}
		}
	}
	.active{
		bottom: -232px;
	}
</style>