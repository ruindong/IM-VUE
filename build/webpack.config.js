const path = require('path');    //path 模块提供了一些工具函数，用于处理文件与目录的路径。
const HtmlWebpackPlugin = require('html-webpack-plugin');   //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理构建目录下的文件
const webpack = require('webpack');       //webpack打包工具
const VueLoaderPlugin = require('vue-loader/lib/plugin');         // vue-loader 编译vue文件
//const ExtractTextPlugin = require("extract-text-webpack-plugin"); //css分离 webpack4已经不支持
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离

module.exports = {
    mode: "development",
    entry: {       //入口
        "app": path.resolve(__dirname, "../src/main.js")
    },
    module:{            //处理项目中的不同类型的模块。
        rules:[      // rules 各种规则(数组类型) 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)
            {
                test: /\.(sa|sc|le|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: { path: path.resolve(__dirname, '../postcss.config.js') }
                        },
                    }
                ],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']      //vue-loader 编译vue模块
            },
            {
                test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', //是指定使用的loader和loader的配置参数
                    options:{
                        limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                        outputPath:'images/',  //打包后的图片放到images文件夹下
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /(node_modules)/,
                use: ["babel-loader"]
            }
        ]
    },
    devtool: 'inline-source-map',   //生曾map 映射对应代码  方便错误查询
    devServer:{
        contentBase: path.resolve(__dirname, '../dist'),    // 告诉服务从哪提供代码内容(静态文件这么使用)
        hot:true    //hot模式开启
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({            // 构建html
            filename:'index.html',      //文件名
            title:'im-chat-vue',            //title
            template:'index.html',       //参照模板样式
        }),
        new webpack.HotModuleReplacementPlugin(),  //热模块替换开启
        new VueLoaderPlugin(),                 //vue-loader插件开启
        //new ExtractTextPlugin("index.css") //配置分离出来的css文件地址webpack4已经用不了了
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            filename: 'css/[name].css',
            //chunkFilename: 'css/[id].css',
        })
    ],
    output: {        //出口
        filename: 'index.js',    //文件名
        path: path.resolve(__dirname, '../dist'),   //路径
        publicPath:""        //srcript 引入路径
    },
    resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',
            //用@直接指引到src目录下
            '@': path.resolve(__dirname,'../src'),
        }
    },

};
