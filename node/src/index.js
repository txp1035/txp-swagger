var Koa = require('koa');
var router = require('./routers');

var app = new Koa();

//路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
