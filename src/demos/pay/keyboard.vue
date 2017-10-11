<template>
  <div id="app">
    <div class="example">
      <button @click="isPay=true">点击弹出支付键盘</button>
    </div>
    <vue-pixel-keyboard ref="pay" :is-pay='isPay' @pas-end='pasEnd' @close='isPay=false' :keyList=keyList>
    </vue-pixel-keyboard>
  
  </div>
</template>

<script>
import {vuePixelKeyboard} from 'vue-pixel-keyboard'
export default {
  name: 'app',
  data() {
    return {
      isPay: false,
      keyList: [
      	[3,4,5],
      	[2,9,1],
      	[8,6,7]
      ]
    }
  },
  components:{
    vuePixelKeyboard
  },
  methods: {
    pasEnd(val) {
      let vm = this,pubkey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDK09kzKbf5aod64DqpYoJGKfNvObYRgCTPVcCqrcqNoG+gnAKRKiw4jMf56aywXpNxrP5gxBu3p1SpV4Fq1ax//iZJe9LkJ/+3PNUqDz9zgB+W0vHlNITDk5OyQy+MKcP/SP0Z6TOO+TQ4M9ojHFSFUfXbyAqYLC/52TT6N+xMwwIDAQAB'
      val = vm.encryptData(val,pubkey);  //得到密码 可能会进行一些加密动作
      setTimeout(() => { // 模拟请求接口验证密码中 .. 
        if (val === '111111') {
          this.$refs.pay.$payStatus(true) // 传递给子组件
        } else {
          this.$refs.pay.$payStatus(false)
        }
      }, 1000)
    }
  },
  mounted(){
    var encrypt = new JSEncrypt();
  }
}
</script>

<style lang="scss">
.example {
  text-align: center;
  margin-bottom: 20px;
  button {
    border: 1px solid #ccc;
    height: 30px;
    background: #fff;
  }
}
</style>