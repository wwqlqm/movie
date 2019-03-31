<template>
    <div class="out">
        <div class="city_lise">
            <div class="hot_list">
                <h3>热门城市</h3>
                <ul class="city">
                    <li v-for="item in hotList" :key="item.id"><span>{{item.nm}}</span></li>
                </ul>
            </div>
            <div class="other_city" ref="city_sort">
                <div v-for="item in cityList" :key="item.id">
                    <h3>{{item.index}}</h3>
                    <ul>
                        <li v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}</li>
                    </ul>
                </div>
            </div>
            <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="item.index" @click="position(index)">{{item.index}}</li>
            </ul>
        </div>
        </div>

</div>
</template>
<script>
    export default {
        name: '',
        data: function () {
            return {
                cityList:[],
                hotList:[]
            }
        },
        mounted(){
            this.axios.get('/api/cityList').then((res)=>{
                var msg = res.data.msg;
                if(msg=='ok'){
                    var data = res.data.data.cities;
                    var {cityList,hotList} = this.formatchCityList(data)
                    this.cityList = cityList
                    this.hotList = hotList
                }
            })
        },
        methods:{
            formatchCityList(cities){
                var cityList = [];
                var hotList = [];
                for(var i=0;i<cities.length;i++){
                    if(cities[i].isHot === 1){
                        hotList.push(cities[i]);
                    }
                }
                for(var i=0;i<cities.length;i++){
                    var firstLetter = cities[i].py.substring(0,1)
                    if(toCom(firstLetter)){
                        cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});

                    }else{
                        for(var j=0;j<cityList.length;j++){
                            if(cityList[j].index== firstLetter){
                                cityList[j].list.push({nm:cities[i].nm,id:cities[i].id});
                            }
                        }
                    }
                }
                cityList.sort((n1,n2)=>{
                    if(n1.index >n2.index){
                        return 1
                    }else{
                        return -1
                    }
                })
                function toCom(firstLetter) {
                    for(var i=0;i<cityList.length;i++){
                        if(cityList[i].index== firstLetter){
                            return false;
                        }
                    }
                    return true
                }
                return {
                    cityList,hotList
                }
            },
            position(index){
                var h3 = this.$refs.city_sort.getElementsByTagName('h3');
                this.$refs.city_sort.parentNode.scrollTop = h3[index].offsetTop;
            }
        }
    }
</script>
<style scoped>
   .city{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
   }
    .city li{
        width:100px;
        height: 20px;
        background: #e54847;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        border-radius: 5px;
    }
    h3{
        background: pink;
    }
.other_city li{
    font-size: 16px;
}
    .city_lise{
        width:95%;
    }
    .out{
        display: flex;
    }
    .city_index ul{
        font-size: 20px;
        position: fixed;
        right: 0;
        top:40px;
    }

</style>
