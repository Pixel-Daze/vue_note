<!-- 基础支付数字键盘组件 -->
<template>
	<div ref="numBoard" class="num-board" :class="{active:active}">
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
			<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum('.')">.</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r" @click="inputNum(0)">0</span>
			<span class="btn-cell pixel-1px-t pixel-1px-r" @click="closeBoard">
				<span class="icon iconfont icon-num-end"></span>
			</span>
		</div>
		<div class="right">
			<div class="delete pixel-1px-t" @click="delLast"><span class="icon iconfont icon-delete1"></span></div>
			<div class="ensure">确&nbsp;定</div>
		</div>
	</div>
</template>
<script>
	/**
	* num-board
	* @desc 数字键盘 适用于Vue2.0+
	* @param {Boolean} [active] - 弹出控制
	* @param {String} [value] - 输入的数字，双向绑定
	* @param {RegExp} [rule] - 输入数字的正则限制
	*
	* @example
	* <pixel-board :active=active v-model="money" :rule=rule @hide="active = false"></pixel-board>
	*/
	export default {
		name:'num-board',
		data(){
			return {
				localNum:'',
				Regex:{
					rule:/^((\d{0,5})|(\d{0,7}\.\d{0,1}))$/
				}
			}
		},
		props:{
			active:{type:Boolean,default:false},
			value:{type:String},
			rule:{type:RegExp}
		},
		methods:{
			closeBoard(){
				this.$emit('hide', false)	
			},
			/* @desc:正则验证 */
			checkReg:function(info,reg){
				var re = new RegExp(reg);
				return re.test(info)?true:false;
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
				}else if(vm.localNum=='0'){
					vm.localNum = val;
				}else if(vm.localNum==''||(vm.localNum!=''&&vm.checkReg(vm.localNum,vm.Regex.rule))){
					vm.localNum += val;
				}
				this.$emit('input', vm.localNum)	
			},
			/* @desc:键盘规则1 */
			dotReg:function(val){
				var vm = this;
				if(vm.localNum!=''&&vm.localNum.split('.').length==1){
					vm.localNum += val;
				}
			},
			/* @desc:键盘规则4 */
			delLast:function(){
				if(this.localNum.length>0){
					this.localNum = this.localNum.substring(0,this.localNum.length-1);
					this.$emit('input', this.localNum)	
				}
			},
		},
		mounted(){
			this.localNum = this.value
			if(this.rule){
				this.Regex.rule = this.rule
			}
			
		}
	}
</script>
<style lang='scss'>
	@import './board.scss';
</style>