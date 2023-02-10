<template>
    <div>
        <h1>register注册组件-{{msg}}</h1>
        <parent></parent>
    </div>
</template>

<script>
    import parent from './Parent.vue';
    export default {
        name:'Register',
        data(){
            return {
                msg:'bbb'
            }
        },
        components:{
            parent
        }
    }
</script>

<style scoped>
    div{
        border: 1px solid red;
    }
</style>