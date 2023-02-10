const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var VueLoaderPlugin = require("vue-loader/lib/plugin.js");
console.log('common');
// 配置文件 ，在配置文件中配置入口和出口
module.exports = {
    // mode: "production",  //指定开发模式  development-开发 production-生产  不设置默认是生产环境    
    entry: "./src/main.js", // 打包的入口
    output: {    // 打包出口目录和文件
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            // css模块
            {
                test: /\.css$/, // test: 指定后缀的文件
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader, options: {
                        esModule: false
                    }
                }, 'css-loader', 'postcss-loader'] //  use: 用哪些loader进行转化。（多个从右到左开始转换）
            },
            //scss模块
            {
                test: /\.scss$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader, options: {
                        esModule: false
                        //MiniCssExtractPlugin插件默认采用es6模块化来进行处理。要把esmodule设置为false才能运行
                    }
                }, 'css-loader', 'postcss-loader', 'sass-loader']   //scss使用的是sass加载器
            },
            // 图片模块
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件大小小于10kb => 打包成base64格式，否则把图片打包成一个二进制文件
                        // 优点：减少请求数量，减轻服务器压力
                        // 缺点：图片体积会更大，请求速度慢。
                        limit: 1024 * 10, // 10kb
                        // name: 原文件名字
                        // hash就是一个唯一的字符串，类似主键
                        // ext: 后缀名
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/',
                    }
                }]
            },
            {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: [{
                    loader: "url-loader"
                }]
            },
            // 打包高级es6语法
            {
                test: /\.js$/,
                // exclude：排除指定目录不需要打包处理
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ],
    },
    plugins: [  //放插件的
        new HtmlWebpackPlugin({
            template: './public/index.html',  //打包index.html为模板到dist文件夹中
            favicon: './public/favicon.ico'
        }),
        new MiniCssExtractPlugin({   //用在生产环境上的
            filename: 'css/index.css',       // 定义打包后的css文件名，默认为main.css
            filename: '[name]-[hash:8].css'  // 每次打包重命名资源，可以防止客户端缓存
        }),
        new CleanWebpackPlugin(),
        // 在开发环境development：清理打包目录dist中的所有文件 
        // 在生产环境production：清理掉一些用不到的垃圾文件

        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 修正vue导的入路径，导入完整的Vue框架
            'vue$': "vue/dist/vue.js",
        },
        alias: {
            // @指向src目录
            '@': path.join(__dirname, 'src'),
            //配置api目录
            '@api': path.join(__dirname, 'src/api'),
            //配置util目录
            '@util': path.join(__dirname, 'src/util'),
            //配置component目录
            '@component': path.join(__dirname, 'src/component'),
        },
        extensions: ['.js', '.json', '.vue'],   //忽略扩展名，在导入模块时可以不加扩展名
    }
}