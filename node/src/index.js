var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .get('/a', (ctx, next) => {
    ctx.body = 'a';
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
