<!-- css3 gradient -->
<template>
	<div class="gradient">
		<div class="eg" v-for="item in egList" :class="item"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				egList:['eg4','eg5','eg6','eg7','eg8','eg9','eg10','eg11']
			}
		}
	}
</script>
<style lang='scss'>
	$eg-color:rgba(139,87,42,.45);
	.gradient{
		padding-top: 0.25rem;
		.eg{
			width: 40%;
			height: 100px;
			float: left;
			margin: 10px 5%;
			background: #ace;
			background-size: 20px 20px;
		}
		.eg1{
			background: linear-gradient(45deg,#ace,#f96);
		}
		.eg2{
			background: repeating-radial-gradient(#ace,#ace 5px,#f96 5px,#f96 10px);
		}
		.eg3{
			background: repeating-radial-gradient(at top left,#ace,#ace 5px,#f96 5px,#f96 10px);
		}
		.eg4{
			background-image: linear-gradient(
				45deg,
				rgba(255,255,255,.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255,255,255,.2) 50%,
				rgba(255,255,255,.2) 75%,
				transparent 75%,
				transparent
				);
		}
		.eg5{
			background-image: linear-gradient(
				135deg,
				rgba(255,255,255,.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255,255,255,.2) 50%,
				rgba(255,255,255,.2) 75%,
				transparent 75%,
				transparent
				);
		}
		.eg6{
			background-image: linear-gradient(
				-45deg,
				rgba(255,255,255,.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255,255,255,.2) 50%,
				rgba(255,255,255,.2) 75%,
				transparent 75%,
				transparent
				);
		}
		.eg7{
			background-image: linear-gradient(
				-135deg,
				rgba(255,255,255,.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255,255,255,.2) 50%,
				rgba(255,255,255,.2) 75%,
				transparent 75%,
				transparent
				);
		}
		.eg8{
			background-image: linear-gradient(
				0deg,
				rgba(255,255,255,.2) 50%,
				transparent 50%,
				transparent
			);
		}
		.eg9{
			background-image: linear-gradient(
				90deg,
				rgba(255,255,255,.2) 50%,
				transparent 50%,
				transparent
			);
		}
		.eg10{
			background-image: 
				linear-gradient(45deg,#555 25%,transparent 25%,transparent),
				linear-gradient(-45deg,#555 25%,transparent 25%,transparent),
				linear-gradient(135deg,#555 25%,transparent 25%,transparent),
				linear-gradient(-135deg,#555 25%,transparent 25%,transparent)
		}
		.eg11{
			background-image: 
				linear-gradient($eg-color 50%,transparent 50%,transparent),
				linear-gradient(90deg,$eg-color 50%,transparent 50%,transparent)
		}
	}
</style>