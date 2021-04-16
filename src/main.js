import '@/assets/styles/reset.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from '@/assets/js/components'
import VueLazyload from 'vue-lazyload'
import instance from '@/assets/js/request'
Vue.prototype.$request = instance

Vue.use(globalComponents) // 初始化全局组件
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
