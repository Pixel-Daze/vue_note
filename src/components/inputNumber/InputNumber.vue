<!-- 计数器 -->
<template>
	<div class="input-number">
		<span class="decrease icon iconfont icon-minus" :class="{'disable_count':curNum == minNum,'pixel-1px':borderd}" @click.prevent="minusPro"></span>
		<input type="number" v-model="curNum">
		<span class="num" :class="{'pixel-1px':borderd}">{{curNum}}</span>
		<span class="increase icon iconfont icon-plus" :class="{'disable_count':curNum == maxNum,'pixel-1px':borderd}" @click.prevent="plusPro"></span>
	</div>
</template>
<script>
	/**
	 * input-number
	 * @desc 计数器
	 * @param {Number} [value] - 绑定值，支持双向绑定
	 * @param {Number} [maxNum] - 最大值
	 * @param {Number} [minNum] - 最小值
	 * @param {Boolean} [borderd] - 是否显示边框
	 *
	 * @example
	 * <input-number v-model="curNum" :max-num="maxNum" borderd></input-number>
	 */
	export default{
		name:'input-number',
		data(){
			return{
				localVal:''
			}
		},
		props:{minNum:{type:Number,default:0},maxNum:Number,value:Number,borderd:Boolean},
		methods:{
			minusPro(){
				this.localVal = this.localVal>this.minNum?this.localVal-1:this.localVal
			},
			plusPro(){
				this.localVal = this.localVal<this.maxNum?this.localVal+1:this.localVal
			}
		},
		computed:{
			curNum:{
				get(){return this.localVal},
				set(val){this.$emit('input',val)}
			}
		},
		mounted(){this.localVal = this.value}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/css/pixel-1px.scss'
	.input-number{
		height: 1.066667rem;
		display:table;  
   		word-spacing:-1em;
		input{display: none;}
		.decrease,.increase,.num{
			color: #9a9a9a;
			background-color: #f2f2f2;
			width: 1.146667rem;
			height: 1.066667rem;
			display: inline-block;
			text-align: center;
			line-height: 1.146667rem;
			font-size: 0.4rem !important;
			word-spacing: 0;
			&::before{
				font-size: 0.4rem !important;
			}
		}
		.disable_count{
			color: #ccc;
		}
		.num{
			background-color: #fff;
			color: rgb(76,80,82);
		}
	}
	.pixel-1px.decrease{border-radius: 0.16rem 0 0 0.16rem;
		&:after{
			border-radius: 0.266667rem 0 0 0.266667rem;
		}
	}
	.pixel-1px.increase{border-radius: 0 0.16rem 0.16rem 0;
		&:after{
			border-radius: 0 0.266667rem 0.266667rem 0;
		}
	}
	.pixel-1px.num{
		&:after{
			border-left:none;border-right: none;border-radius: 0;
		}
	}
</style>