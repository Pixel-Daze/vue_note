<template>
	<div href="javascript:;" class="pixel-grid-item" :style="style">
		<div class="pixel-gird__icon">
			<slot name="icon">
				<span :class="icon"></span>
			</slot>
		</div>
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
		props:['icon'],
		mounted(){

		}
	}
</script>