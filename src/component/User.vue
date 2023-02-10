<template>
    <div>
        <h1>个人组件</h1>
        <router-link to="/user/order">个人订单</router-link>
        <router-link to="/user/address">个人地址</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>