<template>
    <div class="main-container">
        <side-bar></side-bar>
        <div class="main-wrap">
            <top-bar></top-bar>
            <router-view class="page-component-wrap"></router-view>
            <foot-bar></foot-bar>
        </div>
    </div>
</template>
<script>
    import TopBar from '@/components/TopBar'
    import SideBar from '@/components/SideBar'
    import FootBar from '@/components/FootBar'
    export default{
        name:"layout",
        computed:{
        },
        components:{
            'top-bar':TopBar,
            'side-bar':SideBar,
            'foot-bar':FootBar
        }
    }
</script>
<style scoped lang="less">
    .main-container{
        width:100%;
        height:100%;
        .main-wrap{
            padding-left:200px;
            height:100%;
        }
        .page-component-wrap{
            width:100%;
            height:calc(100% - 100px);
            display:block;
            overflow-y:auto;
        }
    }
    
</style>