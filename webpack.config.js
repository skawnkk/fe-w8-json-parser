const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
=======
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f


module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
<<<<<<< HEAD
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ],
    },
=======
        publicPath:'/'
    },
    module: {
        rules: [
          { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
          { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
        ],
      },
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
<<<<<<< HEAD
        new CleanWebpackPlugin()
=======
    new CleanWebpackPlugin()
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
    ],
    mode: 'none'
}