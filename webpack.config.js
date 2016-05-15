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
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};