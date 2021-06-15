const path = require('path');

module.exports = {
    entry: './lib/http.js',
    mode: 'production',
    output: {
        filename: 'http-deno_out.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    },
    node: {
        global: true,
    },
    module : {
        rules: [{
            test: /\.m?js$$/,
            exclude: /(bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};