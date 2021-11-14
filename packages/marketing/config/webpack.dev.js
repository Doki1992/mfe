const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederetionPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packeageJson = require('../package.json');
const commentConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederetionPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                './MarketingApp': './src/bootstrap.js'
            },
            shared: packeageJson.dependencies,
        })
    ],
}; 
module.exports = merge(commentConfig, devConfig);