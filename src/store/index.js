import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    loading:false
  },
  mutations: {
    addCount(state,num){
      console.log(222)
      state.count+=num
    },
    showLoading(state){
      state.loading = true
    },
    hideLoading(state){
      state.loading = false
    }
  },
  actions: {
  },
  modules: {
  }
})
