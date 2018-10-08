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
export default {
  name: 'top-bar',
  methods:{
    logout(){
      alert(1);
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
          color:#fff;
          font-size:24px;
          line-height:60px;
          width:60px;
          text-align:center;
          background-color:transparent;
          cursor:pointer;
        }
        :hover{
          background-color:#fff;
          transition:all 0.3s ease-in-out;
          color:#27a9f8;
        }
      }
    }
}
</style>
