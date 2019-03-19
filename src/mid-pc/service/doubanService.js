const Router = require("koa-router");
const router = new Router();

const apiAdapter = require("../adapter/http-adapter");

const BASE_URL =
  "https://api.douban.com/v2/movie";
const api = apiAdapter(BASE_URL);

router.get("/top250", async (ctx, next) => {
  await api.get(ctx.path,{
    start:5,
    count: 25
  }).then(r => {

    ctx.body = r.data;
  });
  
});


module.exports = router;
