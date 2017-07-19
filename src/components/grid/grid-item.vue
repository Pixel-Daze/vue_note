<template>
	<div href="javascript:;" class="pixel-grid-item" :style="style">
		<div class="pixel-gird__icon" v-if="icon||hasIconSlot">
			<slot name="icon">
				<span :class="icon"></span>
			</slot>
		</div>
		<p class="pixel-grid__label" v-if="label||hasLabelSlot">
			<slot name="label">
				<span v-html="label"></span>
			</slot>
		</p>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'grid-item',
		computed:{
			style(){
				const rows = this.$parent.rows
				if(rows!==3){
					return {width:`${100/rows}%`}	
				}else{
					return
				}
			}
		},
		data(){
			return {
				hasIconSlot:false,
				hasLabelSlot:false
			}
		},
		props:['icon','label'],
		mounted(){
			// 短路原则 this.$slots.icon == true 后续会执行
			// 计算时 若&&(||)，返回第一个false(true)值，若无false(true),则返回最后意向
			this.$slots.icon&&(this.hasIconSlot = true)
			this.$slots.label&&(this.hasLabelSlot = true)
		}
	}
</script>