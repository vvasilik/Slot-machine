var path = require('path')
var webpack = require('webpack')

module.exports = {
	mode: 'none',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loaders: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/
            },
            {   
                loader: "style-loader!css-loader",
                test: /\.css$/
            }
        ]
    }
}