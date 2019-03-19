const Koa = require("koa");
const views = require('koa-views');
const path = require('path');
const logger = require('koa-logger');
var compress = require('koa-compress');
const app = new Koa();

app.use(logger());

app.use(compress());

const router = require("./router/router");

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

router.get("/", async (ctx, next) => {
  await ctx.render('index', {
    a: "我是首页",
    list: [{a: "首页文章1"}, {a: "首页文章2"}],
    message: 'midway'
  });
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3005;
app.listen(port, () => {
  console.log(`listen on ${port}`);
});
