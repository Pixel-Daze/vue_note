<!-- 初级数字键盘 -->
<template>
	<div class="keyboard-num" ref="keyNum">
		<header>
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABLCAMAAADtTJGhAAAA4VBMVEUAAAA1yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ01yJ3///9b0q/z/PlNz6lCy6Pa9e3B7uHK8eb7/v1u2LlW0a5GzaU5yqDl+PPE7+Oi5tKe5dCE3sOs6deS4srY9Oy87d+269yn59V+3ME+y6Ls+vbQ8umM4Mh32r1i1bRQ0Kvb9e4vHNx/AAAAKXRSTlMABM54/fnXZFLv21kJ8ujkxivgrGsOpaCYik0jILCNcl5JPje1koEUhJ/ZaY8AAAKqSURBVFjDxdhpV+IwFAbg27JWNhFU3PeZeQNVEFGUXRxH5///oDmcIiEX2waSc+b5xAfO26TNchOKdJRN7G+nSx680tb2fiJ7RBvaze0VwRX3cru0LueiksL3UieHzlpR52lE2co42lGZHcTZ0Ywrb0OHe6XRrIMk9CRv8hTt2IU+N3qkHHpYRyFL4c6SWFOCwvzA+g5CshKAtbQMJNOeHiaxoRxxxx42VSjzsepic2k2ek+x5LYlYty3plhSo2VXygsbiHjvWHYZ3smeiPeqdtQJHRWPk+FdtOEzVFX6ki/BVHHxDaowd0YBZwuqWx2PbOmdv7ULgL1/HR9QzVejClQtoaMP1XWwP7I9zRdaGqyfqZ+zsBxUA6HnD1SZWVgNqjuhpwlVZRbGvuWD0HTfgcKbrT1QvQhd71CVV1/Zk9A1hOqc6BcUH0LfAxSnRHtQ9IU+NttPiFhl0RD63tgGv/Ix75eGZexPtnIQsY3kt/z0k6UOyZ8T+bgWmwNEqbBZPpYj7mn6tHjE54itthIRVI9fTXvz5ZBroy3mXuA3Fg1jHCrwxawbNGb23YPeNWaz8LUxzwLqQTO7U16wEZXAtfvdcS9YE+rP3dEgmDadwaj58hC0vjfu9tvgPKI0bNmR48ycS7QPW06+q8o+m81mB1E6i3+wuZkFVxdC+IjiL/7BVo1ja2FludIah3lyDzAPq8jdyTwsI/dNozC5b1LFSti1rDXMw7KyCjIMk1UQVS2EncnK0SCMV46UWQlr16O0V8KqvNper9rwWbUddg74K+LdsXNA6AnFbzXitJSG1Syendy89VOd/fOm6dEiYfOMbv32wP69BpctmNy4cGUX+tJlipa/0e5qLU+xLl29Zl1au9krVR2Ld44Wb0P/2z0tv0EuoFDUuUH+B2TdyYoKy3dAAAAAAElFTkSuQmCC" >
			<div class="shop-info">
				<p class="title">家乐福超市</p>
				<p class="intro">
					<span class="icon">商户</span>
					<span class="detail">家乐福超市</span>
				</p>
			</div>
		</header>
		<div class="input-wrap">
			<div class="input-area pixel-1px" @click="showBoard">
				<span>支付金额</span>
				<span class="money">{{money}}<span class='gb'></span>&nbsp;元</span>
			</div>
		</div>
		<cn-convert v-model="money"></cn-convert>
		<div class="logo-wrap">
			<img src="data:image/png;base64,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">
		</div>
		<pixel-board :active=active v-model="money" :rule=rule @hide="active = false"></pixel-board>
	</div>
</template>
<script>
	import {PixelBoard} from '../../components/keyboard'
	import {CnConvert} from '../../components/moneyConvert'
	export default {
		data(){
			return {
				money:'',
                active:false,
                rule:/^((\d{0,6})|(\d{0,8}\.\d{0,1}))$/
			}
		},
		components:{PixelBoard,CnConvert},
		methods:{
			showBoard(){
				this.active = true
            }
		},
		mounted(){
			// 此处需设置高度，否则会有位移动画出现
      		this.$refs.keyNum.style.height='calc(100% - 46px)'
		}
	}
</script>
<style lang='scss'>
	@import './keyboard';
	.keyboard-num{
		@include board-wrap;
		.cn-convert{padding: 10px 35px;text-align: right;}
	}
</style>