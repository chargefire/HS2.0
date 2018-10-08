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
  //登陆页面
  {
    path:'/login',
    name:"login",
    meta:{
      requireAuth:false
    },
    component:Login
  },
  //嵌套页面
  {
    path:"/",
    meta:{
      requireAuth:true
    },
    component:Layout,
    redirect:'/home',
    children:[
      {
        path:"home",
        meta:{requireAuth:true},
        component:Home
      },
      {
        path:"verson",
        meta:{requireAuth:true},
        component:Verson
      }
    ]
  },
  {
    path:"*",
    meta:{
      requireAuth:false
    },
    component:Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start();
  if(to.path == '/login' && Auth.isLogin){
    next('/home')
  }else{
    next()
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
})


export default router