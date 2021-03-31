<<<<<<< HEAD
const express = require('express');
const app = express();
=======
const express =require('express');
const app = express();
const router = express.Router();
const fs = require("fs");




require('dotenv').config();


const portNumber = process.env.PORT;
const path = require('path');

>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
<<<<<<< HEAD
require('dotenv').config();
const portNumber = process.env.PORT;

// const fs = require("fs");
// const path = require('path');
// app.get('/json', (req, res) => res.json(fs.readFileSync("./src/js/json.json")));

app.use(
   webpackMiddleware(
      compiler, {
         publicPath: webpackConfig.output.publicPath,
         stats: {
            colors: true
         }
      }
   )
) //expresss- webpack 실행
=======



app.get('/json', (req, res) => res.json(fs.readFileSync("./src/js/json.json")));
app.use(webpackMiddleware(compiler,{publicPath:webpackConfig.output.publicPath,stats: { colors: true }})) //expresss- webpack 실행
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f

app.listen(portNumber, function () {
   console.log('🎉started')
})