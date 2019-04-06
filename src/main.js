import Vue from 'vue'
import App from './App.vue'

import emptyclass from '../plugin/'

Vue.use(emptyclass)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
