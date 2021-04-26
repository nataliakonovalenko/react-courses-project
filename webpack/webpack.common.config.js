const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

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
        new LoadablePlugin(),
    ],
    module: {
        rules: [
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
