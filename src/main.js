// // main.js是webpack的打包入口，可以加载其他模块（css，图片，js，less/scss等）
// // 导入
// const common = require('./js/common.js');   //commonjs导入
// import esm from './js/esm.js';   //esm导入
import Vue from 'vue';
import app from './app/app.vue';
import router from '@/router/router.js';
import axios from '@/api/index'
import { httpGet, httpPost } from '@/util/Tool'
// 导入过滤器文件，放在入口main文件中，每个文件都可以访问到，filter.js可以不用导出
import '@/filter/filter'

Vue.prototype.$axios = axios
Vue.prototype.$httpGet = httpGet
Vue.prototype.$httpPost = httpPost

Vue.mixin({
    created() {
        console.log('mixin-created');
    }
})


new Vue({
    render(h) {
        return h(app);
    },
    router

}).$mount('#app')
