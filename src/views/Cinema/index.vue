<template>
    <div>
        <headerrouter :title="title"></headerrouter>
        <div class="nav">
            <div><span>全城</span></div>
            <div><span>品牌</span></div>
            <div><span>热度</span></div>
        </div>
        <footerrouter></footerrouter>
    </div>
</template>
<script>
   import headerrouter from '@/components/header/header'
    import footerrouter from '@/components/tabbar/footer'
    export default {
        name:'cinema',
        components:{
            headerrouter,
            footerrouter
        },
        data:function () {
            return {
                title:'喵喵影院'
            }
        }
    }
</script>
<style scoped>
    .nav{
        display: flex;
        justify-content: space-around;
        font-size: 20px;
    }
</style>
