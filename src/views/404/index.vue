<template>
    <div class="notfound">
        <div class="imgcontainer">
            <img src="static/images/404.png">
        </div>
        <div class="tipcontainer">
            <p>该页面不存在，请点击按钮返回首页，或联系管理员</p>
            <el-button type="primary" @click.prevent="gohome">跳转到首页</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        name:"notFound",
        methods:{
           gohome(){
               this.$router.push('home');
           } 
        }
    }
</script>
<style scoped lang="less">
.notfound{
    padding-top:30vh;
    .imgcontainer{
        img{
            width:40%;
            height:auto;
            display:block;
            margin:0 auto;
        }
    }
    .tipcontainer{
        text-align:center;
        p{
            
        }
        .el-button{

        }
    }
}
</style>