<template>
  <div id="app">
    这里是第一个模板
    <v-header :aaaa='aaaa'></v-header>
    <router-view :aa='"路由B"'></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import zidingyi from './components/moban'
import header from './components/header'
import footer from './components/footer'
export default {
  name: 'app',
  data () {
    return {
      aaaa: '路由A'
    }
  },
  components: {
    zidingyi,
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
