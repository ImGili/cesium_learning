const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

const cesiumSource = './node_modules/cesium/Source';
module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new webpack.DefinePlugin({
            CESIUM_BASE_URL: JSON.stringify("")
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.join(cesiumSource, '../Build/Cesium/Workers'), to: 'Workers' },
                { from: path.join(cesiumSource, '../Build/Cesium/Assets'), to: 'Assets' },
                { from: path.join(cesiumSource, '../Build/Cesium/Widgets'), to: 'Widgets' },
                { from: path.join(cesiumSource, '../Build/Cesium/ThirdParty'), to: 'ThirdParty' }
            ]
        }), // 拷贝Cesium资源、控件、WebWorker到静态目录
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: "SimpleCesium",
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: './Assets/sc/[name].[ext]', // 这个路径其实是为了兼容Cesium的资源文件目录
                    limit: 10240 // 超过10K的不转换base64
                }
            }
        ]
    }
};