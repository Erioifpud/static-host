const Koa = require('koa')
const cors = require('@koa/cors')
const send = require('koa-send')
const path = require('path')

const app = new Koa()
app.use(cors())

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: path.resolve(__dirname, '../public') })
})

app.listen(12345, () => {
  console.log('server is running at http://localhost:12345')
})