import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Circle } from 'vant';
import 'vant/lib/circle/style'
Vue.use(Circle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
