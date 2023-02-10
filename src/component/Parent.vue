<template>
    <div class="parentCom">
        <h1 class="f-c-c">parnet-父组件-{{ sonBall }}</h1>
        <!-- 父通信子：在父组件中的子组件身上绑定一个自定义属性，把数据传递过去，子组件通过props接收 -->
        <!-- 子通信父：要把子数据发给父组件，要先在父组件创建一个自定义方法，
            然后在子组件用$.emit触发这个自定义方法（getSonBall）
            然后这里面的handle就会被触发
         -->
        <child :msg="moeny"  @getSonBall='handle'></child>
    </div>
</template>

<script>
    import child from './Child.vue';
    export default {
        data() {
            return {
                moeny:1000,
                sonBall:""
            }
        },
        components:{
            child
        },
        methods: {
            handle(ball){   //接收子组件的数据
                this.sonBall = ball
            }
        },
    }
</script>

<style lang="scss" scoped>
    .parentCom{
        width: 400px;
        height: 300px;
        border: 1px solid red;
    }
</style>