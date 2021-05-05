const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.config.js');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'serverRenderer.js',
        path: path.resolve(__dirname, '../dist/server'),
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                include: /src/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/img/',
                        emitFile: false,
                    },
                },
            },
        ],
    },
    plugins: [
        !isDevMod && new CleanWebpackPlugin(),
    ].filter(Boolean),
});
