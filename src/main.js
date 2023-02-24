import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import pdf from 'vue-pdf';

import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import Login from './components/Login'
import Index from './components/index'
import 'remixicon/fonts/remixicon.css';

import dragVerify from 'vue-drag-verify'
import Global from './components/Global';
import { v4 as uuidv4 } from 'uuid';
import Phone from './components/Phone'
 import 'lib-flexible'
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(echarts)
Vue.use(pdf)


Vue.config.productionTip = false
Vue.prototype.GLOBAL = Global;
Vue.prototype.$echarts = echarts


Vue.prototype.$ajax=axios
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

var router =new VueRouter({
 
  routes:[
    {path:'/',component:Login},
   {path:'/index',component:Index},
   {path:'/phone',component:Phone}




  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
