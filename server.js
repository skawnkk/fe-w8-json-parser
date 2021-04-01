const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
// require('dotenv').config();
const portNumber = process.env.PORT;

app.use(
   webpackMiddleware(
      compiler, {
         publicPath: webpackConfig.output.publicPath,
         stats: {
            colors: true
         }
      }
   )
)

app.listen(portNumber, function () {
   console.log('🎉started')
})