const Router = require("koa-router");
const router = new Router();
const axios = require('axios');

const apiAdapter = require("./../adapter/http-adapter");

const BASE_URL = "https://www.easy-mock.com/mock/5c11c0671a501d42db8e96e8/feed";
const api = apiAdapter(BASE_URL);

router.get("/des", async (ctx, next) => {

  let dataObj = {};
  await api.get(ctx.path).then(async (r) => {
    dataObj = r.data;
    await ctx.render('index', dataObj.data);
  });
  await next();
  console.log('/des ===== ')
});

router.get("/feedList", async (ctx, next) => {

  let dataObj = {};
  // await api.get(ctx.path).then(async (r) => {
  //   dataObj = r.data;
  // });
  let dataObj2 = {};
  // await api.get('/des').then(async (r) => {
  //   dataObj2 = r.data.data;
  // });

  let axiosList=[
    api.get(ctx.path),
    api.get('/des'),
  ];


  // axios.all() 并发请求
  await axios.all(axiosList).then(axios.spread(function(res1,res2){
    console.log(res1.data,res2.data.data);//分别是两个请求的返回值
    dataObj = res1.data;
    dataObj2 = res2.data.data;
  }));



  await ctx.render('index', {
    a: `${dataObj2.a} feedList`,
    list: dataObj.data
  });

  await next();
  console.log('/feedList =====')
});

router.post("/addFeed", async (ctx, next) => {
  await api.get(ctx.path).then(r => {
    ctx.body = r.data;
  });
  await next();
  console.log('/addFeed=====')
});


module.exports = router;
