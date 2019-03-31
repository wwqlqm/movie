<template>
    <div>
        <div id="header">
            <headerrouter :title="title"></headerrouter>
        </div>
        <div class="nav">
            <div><span>全城</span></div>
            <div><span>品牌</span></div>
            <div><span>热度</span></div>
        </div>
        <div>
            <ul>
                <li v-for="item in cinemaList" :key="item.id" class="cinema">
                    <h4>
                        <span>{{item.nm}}</span>
                        <span>{{item.sellPrice}}元起</span>
                    </h4>
                    <h6 class="address">
                        <span>{{item.adde}}</span>
                        <span>{{item.distance}}</span>
                    </h6>
                </li>
            </ul>
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
                title:'喵喵影院',
                cinemaList:[]
            }
        },
        mounted(){
            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                var msg = res.data.msg;
                if(msg == 'ok'){
                    this.cinemaList = res.data.data.cinemas;
                }
            })
        }

    }
</script>
<style scoped>
    .nav{
        display: flex;
        justify-content: space-around;
        font-size: 20px;
    }
    #header{
        height:46px;
    }
    .cinema{
        height:90px;
        background: aqua;
        padding:10px;
        margin-top: 10px;
        opacity: 0.6;
    }
</style>
