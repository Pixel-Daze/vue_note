<template>
    <div id="app">
        <router-view></router-view>
        <mt-tabbar v-model="selected" fixed class="ratain-border-top">
          <mt-tab-item id="appIndex"  @click.native="changeTab('appIndex')">
            <i slot="icon" class="icon iconfont icon-shouye"></i>
            首页
          </mt-tab-item>
          <mt-tab-item id="appMine"  @click.native="changeTab('appMine')">
            <i slot="icon" class="icon iconfont icon-shouye1"></i>
            我的
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      selected:'appMine'
    }
  },
  methods:{
    changeTab(TabName){
      this.selected = TabName
      this.$router.push({name:TabName})
    },
    init(){
      this.selected = 'appIndex'
      if(this.$route.name){
        this.selected = 'appIndex'
      }
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
