
<template>
    <div class="bg">
        <div class="login-wrap">
            <h3>欢迎使用</h3>
            <h3>华鑫自动化办公系统</h3>
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                <el-form-item prop="name">
                    <el-input v-model="loginForm.name" type="text" placeholder='请输入用户名'></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" placeholder='请输入密码' ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row type="flex" justify="space-between">
                        <a href="" @click.prevent="activationId">账号激活</a>
                        <a href="" @click.prevent="forgetPassword">忘记密码</a>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 粒子漂浮物 -->
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="30"
            shapeType="star"
            :particleSize="5"
            linesColor="#fff"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default{
        data(){
            return{
                loginForm:{
                    name:"",
                    password:''
                },
                loginRules:{
                    name:[
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    password :[
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                },
                sysMsg: ''
                }
            
        },
        computed:{

        },
        methods:{
            ...mapActions({
                loginIn:'auth/loginIn'
            }),
            forgetPassword(){
                this.$message.warning("你干嘛不把工资给忘了")
            },
            activationId(){
                this.$message.warning("激活的话你要等会哦")
            },
            submitForm(){
                this.$refs.loginForm.validate((valid) =>{
                    if (valid) {
                        this.loginIn({
                            name:this.loginForm.name,
                            password:this.loginForm.password
                        }).then(res => {
                            if(res.login){
                                this.$router.push('home');
                            }else{
                                alert(404)
                            }
                        })
                    }else{
                        return false
                    }
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .bg{
        position:relative;
        overflow:hidden;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-image: url('../../../static/images/bg.jpg');
        background-size: cover;
        #particles-js{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
        }
    }
    .login-wrap{
        width:330px;
        border-radius:5px;
        padding:20px;
        z-index:3;
        margin-right:-37%;
        background:rgba(216,220,229,0.4);
        .el-form-item{
            margin-bottom:25px!important;
        }
        h3{
            text-align:center;
            color:#ebedef;
            margin-top:0px;
            margin-bottom:5px;
            span{
                color:#20a0ff;
            }
        }
        form{
            margin-top:25px;
            .el-form-item{
                margin-bottom:15px;
            }
        }
        a{
            text-decoration:none;
            color:#eee;
        }
        button{
            width:100%;
            font-weight:600;
        }
    }
</style>