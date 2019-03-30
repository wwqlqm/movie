<template>
    <div>
        <form class="form-horizontal">
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" placeholder="请输入用户名">
    </div>
  </div>
  <div class="form-group">
    <label for="pwd" class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="pwd" placeholder="请输入密码">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
        <div class="aj">
            <button class="btn btn-success btn-block">登录</button>
        </div>

    </div>
  </div>
</form>

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
<style>
    .aj{
        display: flex;
        justify-content: space-around;
    }
    .aj div{
            width: 80%;
    }
</style>
