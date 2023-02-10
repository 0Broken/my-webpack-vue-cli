const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


console.log('prod生产环境');
module.exports = merge(common, {
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({   //用在生产环境上的
            filename: 'css/index.css',       // 定义打包后的css文件名，默认为main.css
            filename: '[name]-[hash:8].css'  // 每次打包重命名资源，可以防止客户端缓存
        })
    ]

})