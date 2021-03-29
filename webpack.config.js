const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath:'/'
    },
    module: {
        rules: [
          { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
          { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
        ],
      },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    new CleanWebpackPlugin()
    ],
    mode: 'none'
}