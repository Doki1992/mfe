const { merge } = require('webpack-merge');
const ModuleFedereationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson =  require('../package.json');
const commonConfig = require('./webpack.common');
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new ModuleFedereationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",                        
            exposes: {
                './MarketingApp': './src/bootstrap.js'
            },
            shared: packageJson.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, prodConfig);