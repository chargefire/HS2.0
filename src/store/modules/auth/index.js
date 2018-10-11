import Auth from '@/util/auth'
import axios from 'axios'
const state={
    token:"",
    navList:[]
}
const mutations={
    setNavList:(state,data)=>{
        state.navList=data
    },
    setToken:(state,data)=>{
        if(data){
            Auth.setToken(data)
            Auth.setLoginStatus()
        }else{
            Auth.removeToken()
            Auth.removeLoginStatus()
        }
        state.token = data
    }
}
const actions={
    //获取菜单信息
    getNavList({commit}){
        return new Promise((resolve)=>{
            axios.get("/api/menu.php").then(res=>{
                commit("setNavList", res)
                resolve(res)
            }).catch(function(error){
                console.log(error);
            })
        })
    },
    loginIn({commit},userInfo){
        return new Promise((resolve)=>{
            axios.post("/api/login.php",userInfo).then(res => {
                console.log(res);
                if(res.login){
                    commit('setToken', res.token)
                }
                resolve(res)
                
            }).catch(function(error){
                console.log(error);
            })
        })
    },
    //退出登录
    logout({commit}){
        return new Promise((resolve)=>{
            commit('setToken','')
            resolve()
        })
    },
    //获取token
    getNewToken({commit}){
        return new Promise((resolve)=>{
            axios.get("/api/gettoken.php").then(res=>{
                commit("setToken",res.token)
                resolve()
            })
        })
    },
    getPermissionList({state}){
        return new Promise((resolve)=>{
            let permissionList = []
            function flatNavList(arr){
                for(let v of arr){
                    if(v.child && v.child.length){
                        flatNavList(v.child)
                    }else{
                        permissionList.push(v)
                    }
                }
            }
            flatNavList(state.navList)
            resolve(permissionList)
        })
    }

}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}
