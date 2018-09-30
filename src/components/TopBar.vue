<template>
  <div class="topbar-wrap">
    <div class="container">
      <ul class="top-nav">
        <li><i class=" al-icon-export"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-bar'
}
</script>
<style scoped lang="less">
.topbar-wrap{
    width:100%;
    height:60px;
    display:block;
    background: #545c64;
    .container{
      display:flex;
      height:100%;
      justify-content: space-between;
      .top-nav{
        display:flex;
      }
    }
}
</style>
