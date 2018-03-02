<template>
	<div class="payment-code">
		<div class="wrap">
			<p class="title text-green">扫码付款</p>
			<p class="shop-name">家乐福超市</p>
			<img src="../../../static/imgs/test-qr.png">
			<div class="icon-wrap">
				<span class="icon iconfont icon-abc"></span>
				<span class="icon iconfont icon-alipay"></span>
				<span class="icon iconfont icon-wechat"></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang='scss'>
	$green-color:#29b68d;
	.payment-code{
		width: 100%;
		height: calc(100% - 46px);
		padding: 0.693333rem 0.533333rem 0;
		background-color: $green-color;
		.icon-abc{color:#2f856d}
		.icon-alipay{color: #009fe9;}
		.icon-wechat{color: #46af35;}
		.wrap{
			width: 100%;
			padding: 0.746667rem 0 .34rem;
			background: #fff;
			text-align: center;
			.title{
				font-size: 0.48rem;
				font-weight: bold;
				color: $green-color;
			}
			.shop-name{
				padding-top: 0.306667rem;
				color: #888;
				font-size: 0.373333rem;
			}
			img{
				width: 5.866667rem;
				margin: 0.8rem 0 0.266667rem;
			}
			.icon-wrap{
				width:100%;
				padding: 10px 2rem; 
				display: flex;
				.icon{
					flex: 1;
					font-size: 38px;
				}
			}
		}
	}
</style>