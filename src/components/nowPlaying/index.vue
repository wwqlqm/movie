<template>
    <div>
         <div class="movie_body">
            <ul>
                <li v-for="item in movieList" :key="item.id" class="show_movie">
                    <div class="pic_show"><img :src="item.img|setWH('/128.180/')" alt=""></div>
                    <div class="info_list">
                        <h3>{{item.nm}}</h3>
                        <p>观众评<span>{{item.sc}}</span></p>
                        <p>主演：{{item.start}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn_small"><a class="btn btn-success btn-group-sm">购票</a></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data: function () {
            return {
                movieList:[]
            }
        },
           mounted(){
            this.axios.get('/api/movieOnInfoList?city=10').then((res)=>{
                var msg = res.data.msg;
                if(msg ==='ok'){
                    this.movieList = res.data.data.movieList
                }
            })
        }
    }
</script>
<style>
    .show_movie{
        display: flex;
    }
    .pic_show{
        padding:10px;
    }
    .info_list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .btn_small{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
