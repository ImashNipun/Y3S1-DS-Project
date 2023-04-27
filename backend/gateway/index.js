const express=require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
require('dotenv').config();

//express app
const app=express()

const issue2options = {
  origin: true,
  credentials: true,
  maxAge: 3600
};

//middle ware
app.use(express.json())
// app.use(cors());
app.use(cors(
  issue2options
));



//routes
app.use('/api/stripe',proxy('http://localhost:5002'));
app.use('/api/orders',proxy('http://localhost:5003'));
app.use('/api/products',proxy('http://localhost:5004'));
app.use('/api/users',proxy('http://localhost:5005'));


app.listen(process.env.PORT, () => {
  console.log("listening on port",process.env.PORT);
});