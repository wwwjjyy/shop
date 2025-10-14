const express=require('express')
const router =require('./router/index.js')
// 创建服务器
const app= express();

app.use('/',router);




app.listen(3333,()=>{
    console.log('服务端启动成功....');
    console.log('http://localhost:3333');
})