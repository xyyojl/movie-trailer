import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import '@/assets/styles/reset.styl'

// 使用 vue-lazyload 懒加载
Vue.use(VueLazyload, {
  loading: require('@/assets/images/loading.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
