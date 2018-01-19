<!-- svg动画 -->
<template>	
	<div class="svg-fir">
		<div class="svg-container">
			<!-- <svg xmlns="http://www.w3.org/2000/svg" class="svg1" width="100%" height="100%">
				<line class="top" x1="0" y1="0" x2="450" y2="0" />
				<line class="right" x1="150" y1="0" x2="150" y2="450" />
				<line class="bottom" x1="150" y1="150" x2="-300" y2="150" />
				<line class="left" x1="0" y1="150" x2="0" y2="-300" />
			</svg> -->
			<h3>D</h3> 
			<span>2012</span> 
			<span>Broccoli, Asparagus, Curry</span>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang='scss'>
	.svg-fir{
		display: flex;
		justify-content:center;
		align-items:center;
		.svg-container{
			width: 150px;
			height: 230px;
			h3 { font-family: "Ruthie", cursive; font-size: 180px; line-height: 370px; margin: 0; font-weight: 400; width: 100%; }
			svg{margin-top: 10px;background-color: #ddd;cursor: pointer;}
			.svg1{
				&:hover line.top{
					transform:translateX(-300px);
				}
				&:hover line.right{
					transform:translateY(-300px);
				}
				&:hover line.bottom{
					transform:translateX(300px);
				}
				&:hover line.left{
					transform:translateY(300px);
				}
				line{
					stroke-width:10;
					stroke:#000;
					fill:none;
					stroke-dasharray:150;
					transition:transform .7s ease-out;
				}
			}
			
		}
	}
</style>