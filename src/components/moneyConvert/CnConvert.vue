// 数字-中文转化组件
<template>
    <div class="cn-convert">{{value|toCn}}</div>
</template>
<script>
import { Money } from './convert'
export default {
    props:{value:String},
    filters:{
        toCn(value){
            if(value!==''){
                return new Money(value).toCn();
            }else{
                return '大写';
            }
        }
    }
}
</script>
<style lang='scss'>
    .cn-convert{
        padding: 10px 15px;
    }
</style>


