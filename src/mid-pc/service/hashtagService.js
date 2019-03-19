const Router = require("koa-router");
const router = new Router();

const apiAdapter = require("./../adapter/http-adapter");

const BASE_URL =
  "https://www.easy-mock.com/mock/5c11ceff4664d341fcc04fb5/hashtag";
const api = apiAdapter(BASE_URL);

router.get("/getTag", async (ctx, next) => {
  await api.get(ctx.path).then(r => {
    ctx.body = r.data;
  });
});

router.get("/getTagList",  async (ctx, next) => {
  await api.get(ctx.path).then(r => {
    ctx.body = r.data;
  });
});

module.exports = router;
