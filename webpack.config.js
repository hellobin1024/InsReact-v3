var path = require('path');
var webpack = require('webpack');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//��������bundle���ļ��������Ż�
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
        //         //���ϱ�����$super��, ��$��, ��exports�� or ��require�������ᱻ����
        //     },
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false,  // remove all comments
        //     },
        // }),
        new webpack.optimize.UglifyJsPlugin({
            // ����յ����
            beautify: false,
            // ɾ�����е�ע��
            comments: false,
            compress: {
                // ��UglifyJsɾ��û���õ��Ĵ���ʱ���������
                warnings: false,
                // ɾ�����е� `console` ���
                // �����Լ���ie�����
                drop_console: true,
                // ��Ƕ�����˵���ֻ�õ�һ�εı���
                collapse_vars: true,
                // ��ȡ�����ֶ�ε���û�ж���ɱ���ȥ���õľ�ֵ̬
                reduce_vars: true,
            }
        }),
        new CompressionWebpackPlugin({ //gzip ѹ��
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //ѹ�� js �� css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new BundleAnalyzerPlugin()
    ],

};