var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var common = {
    entry: {
        home: "./js/home",
        'dev-server': 'webpack/hot/dev-server'
    },
    context: path.join(__dirname, 'assets'),
    resolve: {
        modulesDirectories: ['assets', 'node_modules']
    },
    output: {
        path: path.join(__dirname, './web/compiled'),
        filename: '[name].compiled.js',
        publicPath: '/compiled'
    },
    module: {
        loaders: [
            {
                test: /(\.woff)|(\.eot)|(\.ttf)|(\.svg)/,
                loader: 'url?limit=100000'
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

if (process.env.NODE_ENV == 'production') {
    module.exports = merge(common, {
            module: {
                loaders: [
                    {
                        test: /\.less$/,
                        loader: ExtractTextPlugin.extract("style", "css!less")
                    }
                ]
            },
            plugins: [
                new ExtractTextPlugin('[name].compiled.css')
            ]
        }
    );
} else {
    module.exports = merge(common, {
            module: {
                loaders: [
                    {
                        test: /\.css$/,
                        loaders: ["style-loader", "css-loader"]
                    },
                    {
                        test: /\.less/,
                        loaders: ["style-loader", "css-loader", "less-loader"]
                    }
                ]
            }
        }
    );
}