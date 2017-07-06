<template>
  <div id="app">
    {{ name }}
    <button @click="addagepro()">+</button>
    <button @click="minusagepro()">-</button>
    <router-view :aa='"路由B"'></router-view>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import zidingyi from './components/moban'
export default {
  name: 'app',
  data () {
    return {
      aaaa: '路由 A'
    }
  },
  computed: {
    ...mapState([
      'name',
      'age'
    ]),
    ...mapGetters([
      'golv'
    ])
  },
  methods: {
    ...mapMutations([
      'addage',
      'minusage'
    ]),
    ...mapActions([
      'addagepro',
      'minusagepro'
    ])
  },
  components: {
    zidingyi
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
