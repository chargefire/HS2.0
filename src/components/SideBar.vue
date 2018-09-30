<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <div class="logo">
        <img src="">
      </div>
      <div class="switch-menu"><i class=" al-icon-menu"></i></div>
    </div>
    <el-menu class="menu-wrap" default-active="$route.path"
      background-color="#fff"
      text-color="#909399"
      active-text-color="#27a9f8" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三1</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/verson">
        <i class="el-icon-document"></i>
        <span slot="title">版本信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
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
