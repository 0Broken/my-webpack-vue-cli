import Vue from 'vue';
import * as Tool from '@/util/Tool';
for (let key in Tool) {
    Vue.filter(key, Tool[key]);
}

// Vue.filter('dateFormat', dateFormat);
// Vue.filter('unixFormat', unixFormat);
// 只要main入口文件一导入，就会创建全局过滤器，所以不用导出，main函数可以直接导入