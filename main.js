const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  ctx.body = "nodemon 简易实现";
});

// node项目启动
app.listen(8887,'127.0.0.9', ()=>{
  console.log('127.0.0.9:8887')
});
