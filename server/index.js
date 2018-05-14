const Koa = require('koa');
const app = new Koa();
const render = require('koa-swig');
const path = require('path');
const Router = require('koa-router');
const router = new Router();
const co = require('co');

app.context.render = co.wrap(render({
  root: path.join(__dirname, '../views'),
  autoescape: true,
  cache: false, // disable, set to false 
  ext: 'html'
}));


require('./router.js')(router, app);



/**
 * 下面是router
 */








// app.use((ctx) => {
//   yield this.render('index');
// });

// app.use(async ctx => {
//   //ctx.body = 'Hello World';
//   await ctx.render('index');
// });

app.on('error', (err, ctx) => {
  //log.error('server error', err, ctx)
  console.error(err)
});


process.on('unhandledRejection', function (reason, p) {
    console.error(reason)
});

process.on('uncaughtException', function (reason, p) {
    console.error(reason)
});

app.listen(5000);
