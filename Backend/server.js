const express=require('express');
const app=express();
require('dotenv').config()
const userRouter = require('./routes/userroute')
const productRouter = require('./routes/productroutes')
app.use(express.json());
const connection=require('./config/db')
connection();


app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.listen(8080, ()=>{
    console.log('Server running on 8080')
})