<template>
    <div class="loginCom">
        <h1>login登录组件-{{msg}}</h1>
        <button class="login" @click="login">登录</button>
        <div>
            <button @click="add">add</button>
        </div>
    </div>
</template>

<script>
    console.log('登录路由组件');
    export default {
        name:"Loign",
        data(){
            return {
                msg:1,
                timer:null
            }
        },
        created() {
            this.activatedTimer()
        },
        methods: {
            login(){
                alert('登录中...');
            },
            add(){
                if(!this.timer){
                        this.timer = setInterval(()=>{
                        console.log(this.msg);
                        this.msg++
                    },1000)
                }
            },
            destroyedTimer(){
                clearInterval(this.timer);
            },
            activatedTimer(){
                this.timer = null
            }
        },
        activated() {   //重新加载页面要把定时器重新加载好，不然被销毁过一次后重新跳到此页面定时器是不会被执行的
            this.activatedTimer()
        },
        destroyed() {   //用来关闭定时器和事件
            this.destroyedTimer()
        },
        deactivated() {  //如果有组件有keep-alive包裹，也要加上这专属于keep-alive的生命周期
            this.destroyedTimer()
        },
    }
</script>

<style lang="scss" scoped>  
    $Color:blue;
    .loginCom {
        border: 1px solid $Color;
        .login{
            width: 100px;
            height: 50px;
            color: $Color;
            transform: translateX(50px);
        }
    }
</style>