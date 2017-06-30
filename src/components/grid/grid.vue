<template>
	<div class="pixel-grids">
		<slot></slot>	
	</div>
</template>
<script>
	export default {
		name:'grid',
		props:{
			rows:{
				type:Number,
				default:3
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../../static/lib/css/widget/pixel-grid/pixel-grid.scss';
</style>