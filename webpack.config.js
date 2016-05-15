var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        home: "./js/home"
    },
    context: path.join(__dirname, 'assets'),
    resolve: {
        modulesDirectories: ['assets', 'node_modules']
    },
    output: {
        path: path.join(__dirname, './web/compiled'),
        filename: '[name].compiled.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /(\.woff)|(\.eot)|(\.ttf)|(\.svg)/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.less/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};