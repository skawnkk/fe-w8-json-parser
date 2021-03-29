const express =require('express');
const app = express();
const router = express.Router();

require('dotenv').config();
const portNumber = process.env.PORT;
const path = require('path');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{publicPath:webpackConfig.output.publicPath, writeToDisk: () => true

})) //expresss- webpack 실행

app.listen(portNumber, function () {
   console.log('🎉started')
})