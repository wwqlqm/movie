<template>
    <div id="footer">
        <router-link tag="div" to="/movies">
            <span>电影</span>
        </router-link>
         <router-link tag="div" to="/cinema">
             <span>影院</span>
         </router-link>
         <router-link tag="div" to="/mine">
             <span>我的</span>
         </router-link>
    </div>
</template>
<script>
    export default {
        name: '',
        data: function () {
            return {}
        }
    }
</script>
<style scoped>
    #footer{
        display: flex;
        position: fixed;
        bottom:0;
        justify-content: space-around;
        width: 100%;
        height:30px;
    }

    #footer .router-link-active{color:red}
</style>
