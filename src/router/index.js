import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/util/auth'
import staticRoute from './staticRoute'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: staticRoute
})

router.beforeEach((to, from, next) => {
  if (Auth.isLogin()) {
    console.log(1);
    next({path: "/login", replace: true})
  }else{
    next({path: "/login", replace: true})
  }
})


export default router