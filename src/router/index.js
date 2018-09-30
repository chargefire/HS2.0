import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/util/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Login = resolve => require(['@/views/Login'],resolve)
const Layout = resolve => require(['@/views/Layout'],resolve)
const Home = resolve => require(['@/views/Home'],resolve)
const Notfound = resolve => require(['@/views/404'],resolve)
const Verson = resolve => require(['@/views/Verson'],resolve)

Vue.use(VueRouter)

const routes=[
  {path:'/login',component:Login},
  {path: '/',redirect: '/login'},
  {
    path:'/home',
    component:Layout,
    children:[
      {
        path:"",
        component:Home
      }
    ]
  },
  {
    path:"/verson",
    component:Layout,
    children:[
      {
        path:"",
        component:Verson
      }
    ]
  },
  {path: '*',component: Notfound}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start();
  if(Auth.isLogin()){
    if (to.path === '/login') {
      next("/home")
    } else{
      next()
    }
  }else{
    if (to.path === '/login') {
      next()
    } else{
      next('/login')
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
})


export default router