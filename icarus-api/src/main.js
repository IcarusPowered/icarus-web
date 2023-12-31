import Vue from 'vue'
import App from './App.vue'
// 全局默认样式
import '@/assets/style/reset.css'
import '@/assets/style/global.css'
import '@/assets/style/variable.less'
import '@/assets/style/method.less'

// 按需引入 element-ui 组件
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import './helper/registerElementComponents.js'

import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
