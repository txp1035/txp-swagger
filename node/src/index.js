var Koa = require('koa');
const path = require('path');
const render = require('koa-art-template');
var router = require('./routers');
var app = new Koa();

//中间件
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

//路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log(`http://127.0.0.1:3000`);
