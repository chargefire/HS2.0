<template>
  <div class="topbar-wrap">
    <div class="container">
      <ul class="left-nav">
      </ul>
      <ul class="right-nav">
        <transition name="nav-fade">
        <li @click.prevent="logout"><i class=" al-icon-export"></i></li>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script>
import Auth from '@/util/auth'
export default {
  name: 'topbar',
  methods:{
    logout(){
      Auth.removeLoginStatus();
      this.$router.push('/login');
    }
  }
}
</script>
<style scoped lang="less">
.topbar-wrap{
    width:100%;
    height:60px;
    display:block;
    background: #fff;
    .container{
      display:flex;
      height:100%;
      justify-content: space-between;
      ul{
        list-style:none;
        margin:0;
      }
      .left-nav{
        display:flex;
      }
      .right-nav{
        display:flex;
        li{
          color:#90a4ae;
          font-size:24px;
          line-height:60px;
          width:60px;
          text-align:center;
          cursor:pointer;
        }
        :hover{
          transition:all 0.3s ease-in-out;
          color:#20a0ff;
        }
      }
    }
}
</style>
