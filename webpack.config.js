var path = require('path');
var webpack = require('webpack');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//浏览打包进bundle的文件，进行优化
module.exports = {
    devtool: 'false',
    entry: {
        app:path.resolve(__dirname, './entrys/insurance/index.js'),
        vendor:['react', 'react-dom', 'react-router',
            'immutable', 'velocity-animate', 'rc-banner-anim',
            'rc-tween-one','rc-queue-anim','core-js',
            'events','tween-functions','deep-eql',
            'flux','timers-browserify','style-utils'
        ],

    },

    output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        devServer: {
            contentBase: "./build",
            stats:{colors: true},
            historyApiFallback: true,
            inline: true,
            port:3000,
            hot:true,

            proxy:{
                '/insurancems/*':{
                    target: 'http://localhost:8080/',
                    secure: false,
                    changeOrigin: true
                }
            }
        },

        module: {

        loaders: [

            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude:/node_modules/,loader: 'babel-loader' },

            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'jsx-loader?harmony'
            },
            { test: /\.css$/, loader: "style!css" },
            {test:/\.json$/,loader:"json"},
            {
                test: /\.jsx?$/,
                loader:'babel',
                exclude:'/node_modules/',
                query: {
                    presets: ['es2015','react']
                }
            },
            {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
            {test: /\.gif$/, loader: "url-loader?mimetype=image/gif"},
            {test: /\.jpg$/, loader: "url-loader?mimetype=image/jpeg"}
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        new webpack.DefinePlugin({
            "process.env": {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require']
        //         //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false,  // remove all comments
        //     },
        // }),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new BundleAnalyzerPlugin()
    ],

};