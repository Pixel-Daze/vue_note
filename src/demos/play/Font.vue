<template>
	<div class="font" ref="font">
		<grid :rows="3" v-for="menuItem in letter">
			<grid-item class="grid-center" v-for="item in menuItem" :key="item" :label="item">
			</grid-item>
		</grid>
	</div>
</template>
<script>
	import {Grid,GridItem} from '../../components/grid'
	export default{
		name:'font',
		data(){
			return {
				letter:[]
			}
		},
		components:{Grid,GridItem},
		methods:{
			loadInfo(){
				for(var i=0;i<26;i++) {
					this.letter.push(String.fromCharCode((65+i)))
				}
				this.letter = _.chunk(this.letter,3)

				console.log(this.$refs.font)
			}
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.font{
		height: calc(100% - 46px);
		.grid-center .pixel-grid__label{
			font: bold 32px 'Ruthie';
		}
		.pixel-grid-item{
			&::before,&::after{
				border:none;
			}
		}
	}
</style>