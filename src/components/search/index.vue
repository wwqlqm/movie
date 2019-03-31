<template>
    <div>
        <div class="search">
            <input type="text" class="input-sm movie_search" v-model="message">
            <button class="btn btn-success" >搜索</button>
        </div>
        <div>
            <h3>电影</h3>
            <hr>
        </div>
        <div class="movie_body">
            <ul>
                <li v-for="item in movieList" :key="item.id" class="show_movie">
                    <div class="pic_show"><img :src="item.img|setWH('/128.180/')" alt=""></div>
                    <div class="info_list">
                        <h3>{{item.nm}}</h3>
                        <p>观众评<span>{{item.sc}}</span></p>
                        <p>{{item.cat}}</p>
                        <p>{{ item.rt }}</p>
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
                message:'',
                movieList:[]
            }
        },
        watch:{
            message(newvalue,oldvalue){
                this.axios.get('/api/searchList?cityId=10&kw='+newvalue).then((res)=>{
                    var msg = res.data.msg
                    var data = res.data.data.movies;
                    if(msg && data){
                        this.movieList = res.data.data.movies.list;
                    }

                })
            }
        }
    }
</script>
<style scoped>
    .search{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        background: pink;
        margin-top: 20px;
        opacity: 0.6;
    }
    .movie_search{
        width:70%;
    }
    input{
        border-radius: 10px;
    }
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
