const { merge } = require('webpack-merge');
const ModuleFedereationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packeageJson = require('../package.json');
const commentConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        }
    },
    plugins: [
        new ModuleFedereationPlugin({
            name: 'container',
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: packeageJson.dependencies,
        })
    ],
}; 
module.exports = merge(commentConfig, devConfig);