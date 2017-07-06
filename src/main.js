import Vue from 'vue'
import App from './vuex.vue'
import router from './router/'
import store from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 传递一个参数: 让页面默认显示模板 return
  render: h => h(App)
})
