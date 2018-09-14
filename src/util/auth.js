import Cookies from 'js-cookie'
const authToken = {
    // 当Token超时后采取何种策略
    // jumpAuthPage  每次请求时判断Token是否超时，若超时则跳转到授权页面
    // getNewToken  每次请求时判断Token是否超时，若超时则获取新Token (推荐)

    tokenTimeoutMethod:'getNewToken',

    // 在Cookie中记录登录状态的key
    loginKey:'isLogin',

    // Token是否超时
    hasToken:function(){
        return Cookies.get('token')
    },

    // 当前是否是登录状态
    isLogin:function(){
        return Cookies.get(this.loginKey)
    },

    // 设置Token
    setToken:function(token){
        var maxAge = new Date(new Date().getTime() + 30 * 1000);
        Cookies.set('token',token,{
            expires:maxAge
        })
    }

}
