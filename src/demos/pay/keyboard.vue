<template>
  <div class="pay-page">
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
			<div class="input-area pixel-1px">
				<span>支付金额</span>
				<span class="money" v-cloak>{{money}}<span class='gb'></span>&nbsp;元</span></span>
			</div>
		</div>
		<div class="logo-wrap">
			<img src="data:image/png;base64,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">
		</div>
		<div class="num-board">
			<div class="left">
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(1)">1</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(2)">2</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(3)">3</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(4)">4</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(5)">5</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(6)">6</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(7)">7</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(8)">8</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(9)">9</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" style="font-size:20px;" @click="clear">清除</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(0)">0</span>
				<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum('.')">.</span>
			</div>
			<div class="right">
				<div class="delete pixel-1px-t" @click="delLast">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRUlEQVR4Xu2a8bFNMRCHf68CVIAK6AAVoAJUQAd0gApQAa8CVIAK0AEdmM8kJjLnzslmN+eec+/JzPvr5Wz29+0m2eTmQmfeLs5cv3YAewacOYF9Cpx5AuyL4D4F9ikwjsBVSbfGmTdZ/inpx9QXI6bAbUnPJT0wuTi+8wdJTyT9KoeKBvBY0pvxWrpHQPzNEkIkgFr8Z0lQ/9rtbsyHZORdSfeTOXx6mE1HASDd3xf+kmpvY/wPs4LwDIEs+LsmRACA8EdJLHq0NYrHr2eSXiYf70n6FAGgFv86DRQWtkBDTAMCRQsBUIt/J4l1YK0tFADp/r1I+7WLJyhhABBPKpEBtC2IDwNQi/+WyP5XXKx0DrgzIFr8jUPlqQGgxYYbAGmPEZo38lSL1A6sxr2FktWGCwCD5RXeK/5FOisAkqnTA6H0h4MOmTDXugGUg/1OWdAbNZxkKlGE5JOiFUKvP10Aegebi0YvBI8/ZgBlqkZEvoZiheARb94Gy5PdCPEZRisEr3gTgPpYO/pwMwchQnwzAKq7L0WujhY/lwlPi93Hm4lNawD1fd5SlhJ/CEK5ZnjFN2UAwgFA4zYnFz1zK3rk/+vpgO0I8U0AyvRnn6ZAOUYr57ynWKp9b5oCXBNdT18uPQUYthafRViLpanANQEoO2FkSQj1as9Z4ZWjYuzKAD4qt8EI8i3T6NBWN7dFttjOfZoyIHeOOLC0Oje3z0dBMAHAea61HyUVozJhTvxcnWA5lJkBjIbQKj4KQheAGgLE2R69V2BW8REQugEwOHXBneSFF4L3lFmvCcMvRNBdD+qBkG1ReRIVyzyuM8Fiw5UBIyDgfI/4EoLFhhvAFAR2CoqlLbQQABkCJfOVpHorEMIAoJuDEwvjliCEApiCsOZfhvE3HMAUhCUPT9Z1ZwgAnNjC6xD8HPJAIkdh6YtUa/TpzxOe/HLtWq5mI57IHILAmxx2CG/Z3CO2/IbCC+H5p73L8glfJAAGXfszOe4XKZ7+BSUaQF5tqffz2cEbwajviTwBGvpQsnQW0tQL+SVJlBCrHcpt/hZ7Kmt18Kj9R0yBowqyDr4DsBI7tf57BpxaRK169gywEju1/nsGnFpErXr+AFd7I1AO+8/9AAAAAElFTkSuQmCC" alt="">
				</div>
				<div class="ensure" :class="{able:payStatus}" @click="pay">支付</div>
			</div>
		</div>
	</div>
</template>

<script>
import {vuePixelKeyboard} from 'vue-pixel-keyboard'
export default {
  name: 'app',
  data() {
    return {
      money:'',
			shopInfo:{
				title:'',
				intro:''
			},
			Regex:{
				money:/^((\d{0,5})|(\d{0,7}\.\d{0,1}))$/
			},
			used:true,
			payId:''
    }
  },
  methods:{
			/* @desc:正则验证 */
			checkReg:function(info,reg){
				var re = new RegExp(reg);
				return re.test(info)?true:false;
			},
			/* @desc:付款 */
			pay:function(){
				if(this.payStatus){
					/* @tip:点击后禁用按钮 */
					this.used = false;
					this.money = this.resData();
					console.log('可支付'+this.money);
					// location.href = 'https://wx.cq.abchina.com/sht/test/api' + '/t/r?amount=' + this.money + '&tNote='
				}
			},
			/* @desc:处理支付数据 */
			resData:function(){
				var vm = this
				if(vm.money.substring(vm.money.length-1,vm.money.length)=='.'){
					return vm.money.substring(0,vm.money.length-1)
				}else{
					return vm.money
				}
			},
			/* @desc:清除金额 */
			clear:function(){
				this.money = '';
			},
			/* @desc:键盘各个键位启用规则
			 * 1.第一位不能输入小数点,小数点有且只能有一个
			 * 2.小数点后最多两位
			 * 3.最多8个数字
			 * 4.数字为空,清除末位键不生效
			 * 5.首位数字不能为0,若无小数点，下一个数字键替换0
			 * 6.满足以上规则，有数字且大于0的情况下，支付按钮可用
			 */
			 /* @desc:输入字符 */
			inputNum:function(val){
				var vm = this;
				val = val.toString();
				if(val=='.'){
					vm.dotReg(val)
				}else if(vm.money=='0'){
					vm.money = val;
				}else if(vm.money==''||(vm.money!=''&&vm.checkReg(vm.money,vm.Regex.money))){
					vm.money += val;
				}				
			},
			/* @desc:键盘规则4 */
			delLast:function(){
				if(this.money.length>0){
					this.money = this.money.substring(0,this.money.length-1);
				}
			},
			/* @desc:键盘规则1 */
			dotReg:function(val){
				var vm = this;
				if(vm.money!=''&&vm.money.split('.').length==1){
					vm.money += val;
				}
			}
		},
		computed:{
			payStatus:function(){
				if(this.used&&this.money!==''&&this.money>0){
					return true;
				}else{
					return false;
				}
			}
		}
}
</script>

<style lang="scss">
		.pay-page{
			height: calc(100% - 46px);background-color: #edf8f0;
      header{
        width: 100%;
        display: flex;
        padding-top: 46px;
        justify-content: center;
      }
      .logo-wrap{
        position: absolute;
        width: 100%;
        bottom: 232px;
        padding-bottom: 20px;
        text-align: center;
      }
      .logo-wrap>img{
        width: 49%;
      }
      .num-board{
        width: 100%;
        height: 232px;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fff;
      }
		}
		[v-cloak] { display: none }
		
		header>img{
			width: 42px;height: 42px;margin: 2px 5px 2px 0;
		}
		header .shop-info{margin-left: 5px;display: flex;
			flex-direction: column;}
		header .title{font-size: 16px;color: #333;padding-bottom: 5px;flex: 1;}
		header .intro{
			font-size: 12px;
			color: #aaa;
			flex: 1;
		}
		header .intro .icon{
			background-color: #cad7ce;
			padding: 2px;
			font-size: 9px;
			border-radius: 3px;
			color: #fff;
		}
		.input-wrap{
			width: 100%;
			padding: 40px 15px 0;
		}
		.input-area{
			width: 100%;
			padding: 20px;
			font-size: 20px;
			background-color: #fff;
			border-radius: 3px;
			display: flex;
			justify-content: space-between;
		}
		.input-area .money{font-family:Arial;}
		.input-area::after{border-radius: 7px;}

		
		
		.left{
			-webkit-flex:3;
			flex: 3;
		}
		.left .btn-cell{
			width: 33.33%;
			height: 58px;
			float: left;
			font-size: 24px;
			padding: 15px 0;
			text-align: center;
			display: inline-block;
			font-family:Arial;
		}
	    .left .btn-cell:active{background-color:#ececec;}
		.left .icon-num-end{font-size: 28px;}

		.right{
			-webkit-flex:1;
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.right>div{flex: 1;}
		.right .delete,.right .ensure{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.right .delete img{width: 30px;}
		.right .delete:active{background-color:#ececec;}
		.right .ensure,.right .ensure:active{
			font-size: 18px;
			color: #fcfcfc;
			background-color: #c9c9c9;
			text-align: center;
		}
		
		.right .ensure.able{background-color: #35c89c;}
		.right .ensure.able:active{background-color:rgba(53,200,156,.8);}
		@-webkit-keyframes twinkling {
			/*透明度由0到1*/
			0% {
				opacity: 0;
				/*透明度为0*/
			}
			100% {
				opacity: 1;
				/*透明度为1*/
			}
		}

		.gb {
			-webkit-animation: twinkling 1s infinite ease-in-out;
			background-color: black;
			width: 2px;
			display: inline-block;
			height: 26px;
			vertical-align: bottom;
		}
</style>