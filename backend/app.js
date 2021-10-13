const express = require('express');
const morgan = require('morgan');
const path = require('path');
const todoRouter = require('./routers/todoRouter')
const appErrorController = require('./controllers/errController')
const AppErrorHandler = require('./utils/appErrorHandler')
const app = express();
if(process.env.NODE_ENV!=='PRODUCTION'){
    app.use(morgan('dev'))
}
if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({ path:'./backend/config.env' });
}
app.use(express.json({limit:'10kB'}))
app.use(express.urlencoded({extended:true, limit:'10kB'}))
app.use('/api/v1/todo',todoRouter)
app.use(express.static(path.join(__dirname,'../frontend/build')));
app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
})
app.use('*',(req,res,next)=>{
    return next ( new AppErrorHandler('Sorry this route does not exists',404))
})

app.use(appErrorController);
module.exports = app;