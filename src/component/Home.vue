<template>
    <div>
        <h1>Home组件-{{ a }}</h1>
        <p>当前时间：{{date | dateFormat}}</p>
        <P>当前时间戳：{{unix | unixFormat}}</P>
        <div style="width:150px" class="ellipsis-line-1">2123123123123123123132</div>
        <p style="width: 180px;" class="ellipsis-line-1" v-for='item in news' :key="item.id">  
        <!-- 在template模板中使用v-for，要加上:key,不然会报错 -->
            内容：{{ item.content }}
        </p>
        <div id="box" class="f-c-c">BOX</div>
        <button @click="getMore">获取随机城市</button>
        <div id="cityBox"></div>
    </div>
</template>

<script>
    import {fetchNews} from '@/api/news.js';
    export default {
        name:"Home",
        data(){
            return {
                a:1,
                news:[],
                date:new Date(),
                unix:parseInt(Date.now() / 1000)
            }
        },
        methods: {
            num(){
                setInterval(() => {
                   this.date = new Date()
                }, 1000);
            },
            async fetchData(){
                let {data} = await fetchNews();
                this.news = data
            },
            async getMore(){
                let {data} = await this.$httpGet('http://127.0.0.1:3000/caijing');
                let cityName = data[0].city;
                let pEle = document.createElement('p');
                pEle.innerText = cityName
                document.getElementById('cityBox').appendChild(pEle);
            },
        },
        created() {   //加了keep-alive只会被激活一此
            console.log('home-created');
            this.num()
            this.fetchData();
        },
        activated() {
            console.log('home-激活');
        },
        deactivated() {
            console.log('home-隐藏');
        },
   }
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/common.scss';
    #box{
        width: 150px;
        height: 60px;
        border: 1px solid red;
    }
</style>