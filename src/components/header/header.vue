<template>
    <div id="header"><span>{{title}}</span></div>
</template>
<script>
    export default {
        name: '',
        data: function () {
            return {}
        },
        props:{
            title:{
                type:String,
                default:'喵喵电影'
            }
        }
    }
</script>
<style scoped>
    #header{
        background: #e54847;
        width: 100%;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    }
    #header span{
        color:white;
    }
</style>
