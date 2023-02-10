<template>
  <div class="box">
    <h1>App根组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-link to="/user">个人</router-link>
    <keep-alive>  
      <!-- keep-alive可以缓存组件也可以缓存数据 -->
      <router-view></router-view>
    </keep-alive>
   
  </div>
</template>

<script>
export default {
  name:"App"
};
</script>

<style lang="scss">
  // app.use一般定义公共样式，所有组件都能使用
  // main入口文件可以导入js的逻辑（个人建议）
  @import '@/assets/scss/common.scss';
  /* 路由选中显示样式 */
  .router-link-exact-active{
    border-bottom: 2px solid red;
  }
</style>