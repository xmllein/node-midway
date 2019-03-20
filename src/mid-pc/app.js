const Koa = require("koa");
const views = require('koa-views');
const path = require('path');
const logger = require('koa-logger');
const compress = require('koa-compress');
const static = require('koa-static');
const app = new Koa();



app.use(logger());

app.use(compress());



const router = require("./router/router");

// 配置静态web服务的中间件
app.use(static(
  path.join( __dirname, './public')
));


app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}));

router.get("/", async (ctx, next) => {
  await ctx.render('index', {
    a: "我是首页10",
    list: [{a: "首页文章10"}, {a: "首页文章20"}],
    message: 'midway'
  });
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port);
