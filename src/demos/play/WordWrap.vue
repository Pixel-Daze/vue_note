<template>
	<div class="word-wrap">
		<h2>word-wrap</h2>
		<div class="eg">
			<p>Without word-wrap</p>
			<a>http://www.w3cplus.com_css_css3_word_wrap</a>
		</div>
		<div class="eg">
			<p>没有带word-wrap测试中英文混排</p>
			<a>http://www.w3cplus.com_css_css3_word_wrap</a>
		</div>
		<div class="eg">
			<p>没有带word-wrap测试中英文混排</p>
			<p>thisiswithdadfaadfadfadfadoutwordwrap</p>
		</div>
		<div class="eg wrap">
			<p>With word-wrap</p>
			<a>http://www.w3cplus.com_css_css3_word_wrap</a>
		</div>
		<h2>word-break</h2>
		<div class="eg">我在测试我在测试我在测试我在测试我在测试我在测试，我在测试我在测试</div>
		<div class="eg">没有带word-break测试中英文混排</div>
		<div class="eg">没有带word-break测试中英文混排thisiswithdadfathisiswithdadfa</div>
		<div class="eg break"><strong>带word-break</strong>测试中英文混排thisiswithdadfathisiswithdadfa</div>
		<h2>溢出省略号</h2>
		<div class="eg overflow">我在测试我在测试我在测试我在测试我在测试我在测试，我在测试我在测试</div>
		<div class="eg overflow-3">我在测试我在测试我在测试我在测试我在测试我在测试，我在测试我在测试</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[
				]
			}
		}
	}
</script>
<style lang='scss'>
	.word-wrap{
		height: calc(100% - 46px);
		padding: 0.266667rem;
		h2{font-weight: bold;font-size: 30px;}
		.eg{
			width: 200px;
			border: 1px solid #eee;
			padding: 5px;
			font-size: 16px;
			a{color: #80b3ff;}
			margin-top: 10px;
		}
		.wrap{
			a{word-wrap:break-word;}
		}
		.break{
			word-break:break-all;
		}
		.overflow{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.overflow-3{
			display: -webkit-box;
			overflow: hidden;
			-webkit-box-orient: vertical;
			-webkit-line-clamp:3;
		}
	}
</style>