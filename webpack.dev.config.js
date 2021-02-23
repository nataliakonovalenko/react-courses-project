const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    },
};