import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/icon/local.css'
import "./vant"
import router from "./router"
import "swiper/css/swiper.css"
Vue.config.productionTip = false
import zhHK from 'vant/lib/locale/lang/zh-HK';
import { Locale } from "vant"
Locale.use('zh-HK', zhHK);
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
  router
}).$mount('#app')
