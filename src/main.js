import Vue from 'vue'
import App from './App.vue'
import router from './router/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 传递一个参数: 让页面默认显示模板 return
  render: h => h(App)
})
