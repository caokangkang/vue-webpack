<template>
  <div>
    <!-- <img src="/static/share.jpg" height="400" width="400"><br> -->
  	这里是头部<br>
  	{{aaaa}}
  	<ul>
  		<li v-for="item in nav"><router-link :to="`/xxxx/ ${item.id}.html`">{{item.title}}</router-link></li>
  	</ul>
  </div>
</template>
<script>
export default {
  props: ['aaaa'],
  data () {
    return {
      nav: [
        {title: '首页', id: '/'},
        {title: 'a', id: '/a'},
        {title: 'b', id: '/b'}
      ]
    }
  }
}
</script>
<style>
  ul li{
    list-style: none;
  }
  .router-link-active{
  	color:green;
  }
</style>

