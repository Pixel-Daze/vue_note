<template>
	<transition :name="currentTransition">
	    <div v-show="currentValue" class="mint-popup" :class="[position ? 'mint-popup-' + position : '']">
	      <slot></slot>
	    </div>
  </transition>
</template>
<script>
	export default{
		props:{
			position: {
		        type: String,
		        default: ''
		    }
		},
		data() {
	      	return {
	        	currentValue: true,
	        	currentTransition: this.popupTransition
	      	}
	    },
	}
</script>
<style lang='scss'>
	.mint-popup{
		position: fixed;
	    background: #fff;
	    top: 50%;
	    left: 50%;
	    width: 100%;
	    height: 100%;
	    transform: translate3d(-50%, -50%, 0);
	    backface-visibility: hidden;
	    transition: .2s ease-out;
	    .mint-popup-bottom{
	    	top: auto;
	        right: auto;
	        bottom: 0;
	        left: 50%;
	        transform: translate3d(-50%, 0, 0);
	    }
	}
</style>