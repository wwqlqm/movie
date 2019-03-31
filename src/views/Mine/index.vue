<template>
    <div>
        <div class="header">
        <headerrouter :title="title"></headerrouter>
        </div>
        <login></login>
        <footerrouter></footerrouter>
    </div>
</template>
<script>
   import headerrouter from '@/components/header/header'
    import footerrouter from '@/components/tabbar/footer'
   import login from '@/components/login/index'
    export default {
        name:'mine',
        components:{
            headerrouter,
            footerrouter,
            login
        },
        data:function () {
            return {
                title:'我的喵喵'
            }
        }
    }
</script>
<style>
 .header{
     height: 46px;
 }
</style>
