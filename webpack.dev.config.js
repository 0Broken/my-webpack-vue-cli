const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

console.log('dev开发环境');
module.exports = merge(common, {  //合并common代码
    mode: "development",
    devtool: 'inline-source-map',   //生产环境我们通常是不需要source map的（源码映射）
    devServer: {   //在开发环境才中有效，作用：开启一个服务器
        static: {  //  托管的静态资源目录
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, // gzip压缩
        port: 9090,     // 指定端口
        open: true,     // 自动打开浏览器
        hot: true
    }
})