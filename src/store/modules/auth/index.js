import Cookies from 'js-cookie'
import Auth from '@/util/auth'

const state={
    navList:[]
}
const mutations={
    setNavList:(state,data)=>{
        state.navList=data
    }
}
const actions={
    getNewList({commit}){
        return new Promise((resolve)=>{
            this.$axios.get("/api/menu.php").then(res=>{
                commit("setNavList", res)
                resolve(res)
            })
        })
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}
