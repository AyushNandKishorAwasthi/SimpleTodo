const dotenv = require('dotenv')
const mongoose = require('mongoose');
const path = require('path');
const app = require('./app');
dotenv.config({ path:'./backend/config.env' });
const DB = process.env.DB_URI.replace('<Password>',process.env.DB_PASSWORD);
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>console.log('Successfully connected to database'))

const server = app.listen(process.env.PORT||3000,()=>{
    console.log('Server listening on port',process.env.PORT||3000)
})