const express = require('express')
const path = require('path')

const app = express()


app.use(express.static(path.resolve(__dirname, './public')))

app.listen(12306, () => {
  console.log('正在监听12306端口')
})