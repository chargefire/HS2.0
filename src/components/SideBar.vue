<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <div class="logo">
        <img src="">
      </div>
      <div class="switch-menu"><i class=" al-icon-menu"></i></div>
    </div>
    <el-menu class="menu-wrap" background-color="#fefefe" text-color="#909399" active-text-color="#27a9f8" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical">
       <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/verson">
        <i class="el-icon-document"></i>
        <span slot="title">版本信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  data(){
    return {
      isUnique:true,
      isRouter:true
    }
  },
  computed:{
  },
  methods:{
  },
  watch:{
    '$route' (to,from){
      console.log(to,from)
    }
  }
}
</script>
<style scoped lang="less">
  .el-menu-item{
    position:relative;
  }
  .el-menu-item.is-active{
    background-color:#e9f7ff!important;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color:#e9f7ff!important;
  }
  .el-menu-item.is-active:before{
    content:"";
    position:absolute;
    height:100%;
    width:5px;
    left: 0;
    background-color:#27a9f8;
  }
  .sidebar-wrap{
    position:fixed;
    width:200px;
    height:100%;
    background:#fff;
    border-right: 1px solid #e7eef0;
    .logo-wrap{
      width:100%;
      height:60px;
      display:flex;
      .logo{
        width:140px;
        img{

        }
      }
      .switch-menu{
        font-size:24px;
        line-height:60px;
        color:#fff;
        width:60px;
        display:block;
        text-align:center;
        cursor:pointer;
        :hover{
          color:#20a0ff;
        }
      }
    }
    .el-menu{
      border-right:none;
    }
  }
</style>
