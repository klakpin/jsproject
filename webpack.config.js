const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: ['./src/index.jsx'],
    output: {
        filename: 'main.js',
        publicPath: "/",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "Dota 2 assistant",
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            BACKEND_URL: `"${process.env.BACKEND_URL}"`
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 8989,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}
;
