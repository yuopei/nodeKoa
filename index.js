const Koa = require('koa')
const app = new Koa()

app.use( async (ctx, next) => {
  ctx.response.body = '你好，我是内地吴彦祖'
})

app.listen(3389, ()=>{
  console.log('server is running at http://localhost:3389')
})

// 终端打印如下信息
console.log('Server running NodeJS');