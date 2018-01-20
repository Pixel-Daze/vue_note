<!-- svg动画 -->
<template>	
	<div class="svg-fir">
		<div class="svg-container">
			<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
				<line class="top" x1="0" y1="0" x2="450" y2="0" />
				<line class="right" x1="150" y1="0" x2="150" y2="690" />
				<line class="bottom" x1="150" y1="230" x2="-300" y2="230" />
				<line class="left" x1="0" y1="230" x2="0" y2="-460" />
			</svg>
			<h3>D</h3> 
			<span>2018</span> 
			<span>DazeBoBoLi</span>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang='scss'>
	.svg-fir{
		height: calc(100% - 46px);
		display: flex;
		justify-content:center;
		background-color: #2c3e50;
		.svg-container{
			width: 150px;
			height: 230px;
			position: relative;
			margin-top: 30px;
			cursor: pointer;
			background: rgba(255,255,255,1);
			box-shadow: inset 0 0 0 2px #2c3e50;
			h3 { 
				font-family: "Ruthie", cursive; 
				font-size: 80px; 
				line-height: 170px; 
				margin: 0; 
				font-weight: 400; 
				width: 100%; 
				text-align: center;
			}
			span{
				text-align: center;
				display: block;
				font-weight: 400;
				text-transform: uppercase;
				letter-spacing: 1px;
				font-size: 10px;
				padding: 5px;
			}
			h3,span { 
				transition: color 0.3s; 
			} 
			&:hover h3, &:hover span { 
				color: #fff; 
				transition-delay: 0s; 
			}
			&:hover{
				background-color: #2c3e50;
			}
			&:hover svg line.top{
				transform:translateX(-300px);
			}
			&:hover svg line.right{
				transform:translateY(-460px);
			}
			&:hover svg line.bottom{
				transform:translateX(300px);
			}
			&:hover svg line.left{
				transform:translateY(460px);
			}
			svg{
				position: absolute;
				top: 0;
				left: 0;
				line{
					stroke-width:2;
					stroke:#fff;
					fill:none;
					transition:transform 1s ease-out;
					transition-delay: 0.1s;
				}
				line.top,line.bottom{
					stroke-dasharray:150,150;
				}
				line.right,line.left{
					stroke-dasharray:230,230;
				}
			}
		}
	}
</style>