import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    currentCity: '北京'
  },
  mutations: {
    changeCity (state, city) {
      state.currentCity = city
    }
  }
})
