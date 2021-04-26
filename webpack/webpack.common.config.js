const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'css'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HTMLWebpackPlugin({
        //     template: './index.html'
        // }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].[fullhash].css'
        // })
        new LoadablePlugin(),
    ],
    module: {
        rules: [
            // {
            //     test: /\.(s[ac]ss|css)$/i,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 publicPath: path.resolve(__dirname, 'dist')
            //             }
            //         },
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // },

            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ],
    },
};
