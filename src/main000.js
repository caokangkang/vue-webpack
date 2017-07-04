// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入的路径没有 ./  /  直接写名字是找到 mode_modules 目录下的文件
import Router from 'vue-router'
// 传值方式
// 1.通过网址传递 在路由里获取
// 2.同上       直接 :to="{ path:'/b/bb', query:{id:123} }" 传递的方式是明文的 在网址后面会加上 ?xxx=xxx
// 3.    params传值方式，  必须是通过name去寻找对应的路由  才可以获取到数据
const App = {
  template: `<div id="app">
  默认显示内容
  <button @click="$router.go(-1)">返回</button>
  <button @click="$router.go(1)">前进</button>
  <ul>
  <li><router-link to="/">首页</router-link></li>
  <li>
    <router-link to="/a">a</router-link>
    <ul>
      <li><router-link to="/a/aa">aa</router-link></li>
      <li><router-link to="/a/aaaa">aaaa</router-link></li>
    </ul>
  </li>
  <li><router-link :to="{ path:'/b/bb',params:{ id:123 } }">/b/bb</router-link></li>
  <li><router-link :to="{ name: 'c', params:{ id:'cccccc' } }">c</router-link></li>
  <li><router-link to="/d">d</router-link></li>
  <li><router-link to="/e">e</router-link></li>
  <li><router-link :to="{ path:'/f',query:{id:12345} }">f</router-link></li>
  <li><router-link to="/g">g</router-link></li>
  </ul>
  <router-view></router-view>
</div>`
}

const index = {
  template: `<div>这里是index</div>`
}
const a = {
  template: `<div>
    <p>这里是a</p>
    <router-view></router-view>
  </div>`
}
const aa = {
  template: `<div>这里是aa {{$route.params}}</div>`
}
const b = Vue.component('b', {
  template: `<div>这里是b</div>`,
  mounted () {
    console.log(this.$route.params)
  }
})
const c = {
  template: `<div>{{ $route.params }}</div>`
}
const g = {
  template: `<div>这里是g</div>`,
  beforeRouteEnter (to, from, next) {
    console.log(arguments)
    next()
  }
}
// 根路由显示的地方是第一个 router-view标签里
const router = new Router({
  routes: [
    // 在routes里面的称之为根路由
    // 根路由可以写 /
    {path: '/', component: index},
    {path: '/a',
      name: 'a',
      component: a,
      children: [
      // 子路由可以不写 /
        // 父级路由定义了 /a/子路由的path
        // 子路由显示的地方 父级路由模板里第一个router-view标签里
        // :随便起的名字  绑定了一个值是可以接收数据
        // http://localhost:8080/#  /a/     aa
        // /a/父级路由对应上了
      {path: 'aa', component: aa},
      {path: ':id', component: aa}
      ]
    },
    {path: '/b/:id', name: 'b', component: b},
    {path: '/c', name: 'c', component: c},
    // 直接写想要跳转的路由
    {path: '/d', redirect: '/c'},
    // 根据name跳转
    {path: '/e', redirect: {name: 'a'}},
    // 定义函数 hash: 路径; params: 传递参数;
    {path: '/f',
      redirect: (hash, params, query) => {
        // console.log(hash.query.id)
        if (hash.query.id === 123456) {
          return {name: 'c'}
        } else {
          return '/b'
        }
      }
    },
    {
      path: '/g',
      component: g,
      beforeEnter (to, from, next) {
        setTimeout(() => {
          next()
        }, 2000)
      }
    }
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
