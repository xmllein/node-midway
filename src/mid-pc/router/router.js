const Router = require("koa-router");
const router = new Router();

const feedService = require("./../service/feedService");
const hashtagService = require("./../service/hashtagService");
const doubanService = require("./../service/doubanService");

router.use(async (ctx, next) => {
  console.log("Called: ", ctx.path);
  await next();
});

router.use(feedService.routes());
router.use(hashtagService.routes());
router.use(doubanService.routes());

module.exports = router;
