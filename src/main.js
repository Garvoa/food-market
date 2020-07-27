import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/icon/local.css'
import "./vant"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
