<template>
	<div>
		<div class="s-title">
			交易通知
		</div>
		<pixel-cell title="交易通知接收">
			<mt-switch slot="des" v-model="msgResolve"></mt-switch>
		</pixel-cell>
	</div>
	
</template>
<script>
	import {InputNumber} from '../../components/inputNumber'
	import {PixelCell} from '../../components/pixelCell'
	export default {
		name:'input-number',
		components:{
			InputNumber,PixelCell
		}
	}
</script>