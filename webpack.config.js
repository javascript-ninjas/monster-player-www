var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.es6.js', '.js','']
    },
    entry: './app/scripts/main',
    output: {
        filename: 'bundle.js',
        path: './app/dist'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    module: {
        loaders: [
            {
                test: /\.es6\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ]
};