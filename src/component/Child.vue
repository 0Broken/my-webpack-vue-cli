<template>
    <div class="childCom">
        <h1>Child-子组件</h1>
        <div>来自父亲发的钱-{{ msg }}</div>
        <button @click="takeBalltoParent">把球传给父亲</button>
    </div>
</template>

<script>
    export default {
        props:["msg"],
        data() {
            return {
                ball:"乔丹篮球"
            }
        },
        methods: {
            takeBalltoParent(){
                this.$emit('getSonBall',this.ball);//把参数传到父组件去
            }
        },
    }
</script>

<style lang="scss" scoped>
    .childCom{
        width: 250px;
        height: 150px;
        border: 1px solid red;
    }
</style>