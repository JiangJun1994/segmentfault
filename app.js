/**
 * Created by jiangjun on 2017/8/9.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var users = require('./routes/users.js')

var app = express();

var webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackDevConfig = require('./webpack.config.js');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

  // public path should be the same with webpack config
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));


// view engine setup
app.set('views', path.join(__dirname, 'views'));//set方法用于指定变量的值，这里是为系统变量views指定值，意为视图存放的目录。
app.set('view engine', 'ejs');//这里是为系统变量views engine指定值，意为网页模版引擎。

//use方法用于调用express的中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: '12345',
  name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {maxAge: 3600000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public')));
//设置跨域访问
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/users', users);


module.exports = app;

