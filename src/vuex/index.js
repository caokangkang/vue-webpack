import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 相当于 computed 作用域 state 过滤作用
const getters = {
  golv (state) {
    state.name = '123'
  }
}
const state = {
  age: '1',
  name: 'abc'
}
// 主要用来控制 state 里面的数据
const mutations = {
  addage () {
    state.age++
  },
  minusage () {
    state.age--
  }
}
// 用来调用 mutations 里的方法
// 可以进行异步操作

const actions = {
// 默认接收一个参数
// commit是针对mutations里的方法以字符串方式引用
// {commit}是es6的写法。在函数中传递的是对象，对象里的属性可以直接用{属性名}方式传递
  addagepro ({commit}) {
    commit('addage')
  },
  minusagepro ({commit}) {
    commit('minusage')
  }
}

// 语法检测的时候 new必须进行赋值
/* eslint-disable no-new */
export default new Vuex.Store({
  // 用来保存数据的
  state,
  mutations,
  actions,
  getters
})
