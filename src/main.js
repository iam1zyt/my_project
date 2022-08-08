import Vue from 'vue'
import App from './App.vue'
import iview from 'iview'
import router from './router'
import store from './store'
import api from './api/index'
import 'iview/dist/styles/iview.css';
import './style/common.css'
import * as echarts from "echarts";


import Components from '@/components'
Vue.use(Components);

Vue.use(iview)
Vue.prototype.$api = api;
Vue.prototype.$store = store;
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.PROXY_URL = process.env.NODE_ENV === 'production' ? 'apis' : '/api';
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
