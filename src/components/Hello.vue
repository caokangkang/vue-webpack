<template>
  <div>
    <!-- 必须写一个元素包裹起来（template这个标签下面的元素只能一个） -->
    <!-- 这里是用来存放 html代码 -->
    <p>{{ name }}</p>
    <moban></moban>
  </div>
</template>
<script>
  // 相当于 var zidingyi = moban
  import moban from './moban'
  // JS代码
  export default {
    // Vue都是在这里写
    data () {
      return {
        name: 'ckk'
      }
    },
    methods: {
      abc () {
        alert(`这里是methods`)
      }
    },
    components: {
      moban
    }
  }
</script>
<style>
  p{
    color: pink;
  }
</style>
