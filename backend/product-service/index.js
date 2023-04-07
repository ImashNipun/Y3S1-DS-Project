const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./dbconnection/dbconnection');


const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const productRoute = require('./routes/productRoute');


app.use('/api/v1',productRoute);



connection.once('open',()=>{
    console.log('Product Service DB connected successfully!!');
})

app.listen(PORT,()=>{
    console.log(`Product-Service server up and running on PORT : ${PORT}`);
})






