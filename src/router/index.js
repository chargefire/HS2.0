import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = resolve => require(['@/views/Login'],resolve)
const Layout = resolve => require(['@/views/Layout'],resolve)
const Home = resolve => require(['@/views/Home'],resolve)
const Notfound = resolve => require(['@/views/404'],resolve)

Vue.use(VueRouter)

const routes=[
  {path:'/login',component:Login},
  
  {
    path:'/',
    meta: { requireAuth: true },
    component:Layout,
    children:[
      {
        path:"home",
        component:Home
      }
    ]
  },
  {
    path: '*',
    meta: { requireAuth: false },
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router