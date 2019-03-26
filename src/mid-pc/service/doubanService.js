const Router = require("koa-router");
const router = new Router();

const apiAdapter = require("../adapter/http-adapter");

const BASE_URL =
  "https://api.douban.com/v2/movie";
const api = apiAdapter(BASE_URL);
// 电影列表   条数自己配置
router.get("/top250", async (ctx, next) => {
  await api.get(ctx.path, {
    params: {
      start: 0,
      count: 25
    }
  }).then(async (r) => {
    await ctx.render('douban', {
      a: '豆瓣电影',
      list: r.data.subjects
    });

  });

  await next();

});

//电影详情
router.get("/subject/:id", async (ctx, next) => {
  await api.get(ctx.path).then(async (r) => {
    await ctx.render('detail', {
      a: r.data.title,
      summary: r.data.summary,
      largeImg: r.data.images.large
    });

  });

  await next();
});


module.exports = router;
