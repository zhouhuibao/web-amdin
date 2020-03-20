import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import '@/assets/css/reset.less'


Vue.config.productionTip = false

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
