// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import ElementUI from 'element-ui'
import store from '@/store/index.js'
import 'element-ui/lib/theme-chalk/index.css'

import 'swiper/dist/css/swiper.css'
import './util/validate.js' // 表单验证

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
