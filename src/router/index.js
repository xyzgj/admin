import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login'
import Index from '../components/index'
import Phone from '../components/Phone'


Vue.use(Router)

export default new Router({
  
   routes:[
     {path:'/',name:'Login', component:Login},
    {path:'/index',name:'Index',component:Index},
    {path:'/phone',name:'Phone',component:Phone}




   ]
})
