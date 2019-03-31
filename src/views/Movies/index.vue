<template>
    <div>
            <div class="header_one">
                 <headerrouter :title="title" class="header"></headerrouter>
            </div>
        <div class="middle">
            <router-link tag="div" to="/movies/city">地方</router-link>
            <router-link tag="div" to="/movies/nowPlaying">正在上映</router-link>
            <router-link tag="div" to="/movies/fastGo">即将上映</router-link>
            <router-link tag="div" to="/movies/search">搜索</router-link>
        </div>
        <router-view/>
        <footerrouter></footerrouter>
    </div>
</template>
<script>
    import headerrouter from '@/components/header/header'
    import footerrouter from '@/components/tabbar/footer'
    export default {
        name:'movies',
        components:{
            headerrouter,
            footerrouter
        },
        data:function () {
            return {
                title:'喵喵电影'
            }
        }
    }
</script>
<style scoped>
    .middle{
        display: flex;
        justify-content: start;
    }
    .middle div{
        flex-grow: 1;
        font-size: 20px;
        height: 30px;
    }
    .middle div.router-link-active{border-bottom:red 1px solid;}
    .header_one{
       height:46px;
    }
</style>
