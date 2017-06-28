<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="icon iconfont icon-shouye1"></div>
    <div class="px-box pixel-1px"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.px-box{
  width: 4rem;
  height: 4rem;
  margin: 0.266667rem auto;
  background: rgba(249,78,78,0.5);
  transform: scale(1);
}
</style>
