const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',

    entry: [
        isDevMod && 'webpack-hot-middleware/client',
        './src/client.jsx',
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/img/'
                    },
                },
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                include: /src/,
                use: [
                    isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },

    plugins: [
       // !isDevMod && new CleanWebpackPlugin(),
        isDevMod && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ].filter(Boolean),
});
