import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/icon/local.css'
import "./vant"

import "swiper/css/swiper.css"
Vue.config.productionTip = false
import zhHK from 'vant/lib/locale/lang/zh-HK';
import { Locale } from "vant"
import store from "./store"
Locale.use('zh-HK', zhHK);
import router from "./router"
Vue.prototype.$bus = new Vue()
// window.addEventListener(
//   'beforeunload',
//   () => {
//     console.log(this)
//     Vue.$router.push({ path: '/' })
//   },
//   false
// )

// const messages = {
//   // 'en-US': {
//   //   vanPicker: {
//   //     confirm: '确认', // 将'确认'修改为'关闭'
//   //   },
//   // },
//   'zh-CN': {
//     vanPicker: {
//       confirm: '确认', // 将'确认'修改为'关闭'
//     },
//   },
// };

// Locale.add(messages);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
