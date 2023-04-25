const express=require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./dbconnection/dbconnection');
const orderRoutes=require('./routes/orders');

//express app
const app=express()

//middle ware
app.use(express.json())
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/orders',orderRoutes)


//db connection
connection.once('open',()=>{
    console.log('Order Service DB connected successfully!!');
});

app.listen(process.env.PORT, () => {
  console.log("listening on port",process.env.PORT);
});


