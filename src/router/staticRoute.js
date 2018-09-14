import Login from "@/views/Login"
const staticRoute = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import(Login)
  }
]
export default staticRoute