// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入的路径没有 ./  /  直接写名字是找到 mode_modules 目录下的文件
import Router from 'vue-router'

const App = {
  template: `<div id="app">
  <ul>
  <li><router-link to="/">首页</router-link></li>
  <li>
    <router-link to="/aa">aa</router-link>
    <ul>
      <li><router-link to="/aa/b">b</router-link></li>
      <li><router-link to="/aa/bbb">c</router-link></li>
    </ul>
  </li>
  <li><router-link :to="{ name: 'c', query:{ id:123 } }">c</router-link></li>
  </ul>
  <router-view></router-view>
</div>`
}

const index = {
  template: `<div>这里是index</div>`
}
const aa = {
  template: `<div>
    <p>这里是a</p>
    <router-view></router-view>
  </div>`
}
const b = {
  template: `<div>这里是b {{$route.params}}</div>`
}
const c = Vue.component('b', {
  template: `<div>这里是c</div>`,
  mounted () {
    console.log(this.$route)
  }
})
// 根路由显示的地方是第一个 router-view标签里
const router = new Router({
  routes: [
    // 在routes里面的称之为根路由
    // 根路由可以写 /
    {path: '/', component: index},
    {path: '/aa',
      component: aa,
      children: [
      // 子路由可以不写 /
        // 父级路由定义了 /a/子路由的path
        // 子路由仙子的地方 父级路由模板里第一个router-view标签里
        // :随便起的名字  绑定了一个值是可以接收数据
        // http://localhost:8080/#  /a/     aa
        // /a/父级路由对应上了
      {path: 'b', component: b},
      {path: ':id', component: b}
      ]
    },
    {path: '/c/:id', component: c}
  ]
})

// 使用插件
Vue.use(Router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 传递一个参数: 让页面默认显示模板 return
  render: h => h(App)
})

// template:'<App/>',components: { App }
