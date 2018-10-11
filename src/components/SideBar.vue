<template>
  <div class="sidebar-wrap">
    <div class="logo-wrap">
      <div class="logo">
        <img src="static/images/logo.png">
      </div>
      <div class="switch-menu"><i class=" al-icon-menu"></i></div>
    </div>
    
    <el-menu class="menu-wrap" background-color="#fefefe" text-color="#909399" active-text-color="#27a9f8" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical">
      <template v-for="item in menu">
          <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
              <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                  <i :class="child.icon"></i>
                  <span slot="title">{{child.name}}</span>
              </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.router" :key="item.router">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
          </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  data(){
    return {
      isUnique:true,
      isRouter:true,
      menu: window.localStorage.getItem("menu") ? JSON.parse(window.localStorage.getItem("menu")) : []
    }
  },
  computed:{
  },
  methods:{
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
        font-size:18px;
        line-height:60px;
        color:#90a4ae;
        width:60px;
        display:block;
        text-align:center;
        cursor:pointer;
        :hover{
          color:#187fcb;
        }
      }
    }
    .el-menu{
      border-right:none;
    }
  }
</style>
