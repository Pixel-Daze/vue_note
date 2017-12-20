<!-- cell组件 -->
<template>
	<div class="pixle-cell pixel-1px-b">
		<span class="title text-overflow">{{title}}</span>
		<span class="value text-overflow">{{value}}</span>
		<slot name="des"></slot>
		<span v-if="isLink" class="pixel-header-left">
			<span class="left-arrow"></span>
		</span>
	</div>
</template>
<script>
	export default {
		props:{
			title:String,
			value:String,
			isLink:Boolean
		}
	} 
</script>
<style lang='scss'>
	.pixle-cell{
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		background: #fff;
		display: flex;
		.title{ width: 100px; }
		.value{flex: 1;color: #bbb;}
		.pixel-header-left{
			width: 30px;
			position: relative;
			.left-arrow{
				position: absolute;
				width: 20px;
				height: 20px;
				top: 5px;
				left: -5px;
				&:before{
					content:' ';
					position: absolute;
					width: 12px;
					height: 12px;
					border: 1px solid #bbb;
					border-width: 1px 0 0 1px;
					transform: rotate(135deg);
					top: 8px;
					left: 7px;
				}
			}
		}
	}
</style>