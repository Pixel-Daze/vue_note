<!-- header component -->
<template>
	<div class="pixel-header pixel-1px-b">
		<div class="pixel-header-left">
			<slot name="overwrite-left">
				<transition :name="transition">
					<a class="pixel-header-back" @click="onClickBack" v-show="_leftOptions.showBack">
						{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOpyions.backText }}
					</a>
				</transition>
				<transition :name="transition">
					<div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
				</transition>
			</slot>
			<slot name="left"></slot>
		</div>
		<h1 class="pixel-header-title">
			<slot>
				<transition :name="transition">
					<span v-show="title">{{title}}</span>
				</transition>
			</slot>
		</h1>
		<div class="pixel-header-right">
			<a class="pixel-header-more" @click.prevent="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	import objectAssign from 'object-assign'
	export default {
		name:'p-header',
		props:{
			title:String,
			transition:String,
			leftOptions:Object,
			rightOptions:{
				type:Object,
				default(){
					return { showMore:false }
				}
			}
		},
		computed:{
			_leftOptions(){
				return objectAssign({
					showBack:true,
					preventGoBack:false
				},this.leftOptions||{})
			}
		},
		methods:{
			onClickBack(){
				if(this._leftOptions.preventGoBack){
					this.$emit('on-click-back')
				}else{
					this.$router?this.$router.back():window.history.back()
				}
			}
		}
	}
</script>
<style lang='scss'>
@import '../../../static/lib/css/variable.scss';
.pixel-header{
	position: relative;
	padding: 3px 0;
	box-sizing: border-box;
	background-color: $header-background-color;
	.pixel-header-title,h1{
		margin: 0 88px;
		line-height: 40px;
		text-align: center;
		height: 40px;
		font-size: 18px;
		font-weight: 400;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: $header-title-color;
		span{
			display: inline-block;
		}
	}
	.pixel-header-left,.pixel-header-right{
		position: absolute;
		top: 14px;
		font-size: 14px;
		line-height: 21px;
		color: $header-text-color;
		button,a{
			float: left;
			margin-right: 8px;
			&:active{
				opacity: .5;
			};
		}
	}
	.pixel-header-left{
		left: 18px;
		.left-arrow{
			position: absolute;
			width: 30px;
			height: 30px;
			top: -5px;
			left: -5px;
			&:before{
				content:' ';
				position: absolute;
				width: 12px;
				height: 12px;
				border: 1px solid $header-arrow-color;
				border-width: 1px 0 0 1px;
				transform: rotate(315deg);
				top: 8px;
				left: 7px;
			}
		}
		.pixel-header-back{
			padding-left: 16px;
		}
	}
	.pixel-header-right{
		right: 15px;
		a,button{
			margin-left: 8px;
			margin-right: 0;
		}
		.pixel-header-more:after{
			content: "\2022\0020\2022\0020\2022\0020";
  			font-size: 16px;
		}
	}
	.pixel-header-fade-in-right-enter-active {
	  	animation: fadeinR .5s ease-in-out;
	}
	.pixel-header-fade-in-left-enter-active {
	  	animation: fadeinL .5s ease-in-out;
	}
	@keyframes fadeinR {
	  	0% {
	    	opacity: 0;
	    	transform: translateX(150px);
	  	}
	  	100% {
	    	opacity:1;
	    	transform:translateX(0px);
	  	}
	}
	@keyframes fadeinL{
	  	0% {
	    	opacity: 0;
	    	transform: translateX(-150px);
	  	}
	  	100% {
	    	opacity: 1;
	    	transform: translateX(0);
	  	}
	}
}
</style>