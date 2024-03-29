const htmlWebpackPlugin = require('html-webpack-plugin');   //引入HTML插件
const cleanWebpackPlugin = require('clean-webpack-plugin'); //引入清除文件插件

module.exports = {
    entry:  __dirname + "/src/script/main.js",      //已多次提及的唯一入口文件
    module: {
        rules: [
            {
                test: /\.js$/ ,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + "/src/index_tmp.html",
            filename:'../index.html'                            //根目录入口页面名称
        }),
        new cleanWebpackPlugin()
    ]
};