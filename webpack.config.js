const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    experiments: {
        asset: true,
    },
    entry: './src/index.tsx',
    target: 'web',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Games',
            template: './public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
        }),
    ],
    devServer: {
        port: process.env.PORT || 3000,
        open: true,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/app/components/'),
            '@static': path.resolve(__dirname, './src/app/static/'),
            '@utils': path.resolve(__dirname, './src/app/utils/'),
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.m?(tsx|ts)$/i,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(s[c]ss|css)$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                exclude: /(node_modules)/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][hash:5][ext]',
                },
            },
            {
                test: /\.(jpe|jpg|png|svg)(\?.*$|$)/,
                exclude: /(node_modules)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][hash:5][ext]',
                },
            },
        ],
    },
};
