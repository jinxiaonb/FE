const path = require('path');
const webapck = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/app.js',
        vendors:'./src/vendors.js'//第三方库
    },
    output:{
        publicPath:'http://www.brotherxiao.com/',//发布到公网上，主要是cdn,开发期间为空
        path: path.resoleve(__dirname, 'dist'),//文件的绝对路径
        filename: "[name].bundle.js"//文件名
    },
    module:{
        rules:[
            { test:/\.txt$/, use: 'raw-loader' },
            { test:/\.css$/, use: [
                { loader:'style-loader' },
                {
                  loader:'css-loader',
                  options:{
                      modules:true
                  }
                }] 
            },
            { test:/\.ts$/,  use: 'ts-loader'}
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlwebpackPlugin({template:'./src/index.html'})
    ]
};