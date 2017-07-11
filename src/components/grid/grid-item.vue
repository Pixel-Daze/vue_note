<template>
	<div href="javascript:;" class="pixel-grid-item" :style="style">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		computed:{
			style(){
				const rows = this.$parent.rows
				if(rows!==3){
					return {width:`${100/rows}%`}	
				}else{
					return
				}
				
			}
		}
	}
</script>