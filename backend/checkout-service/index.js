const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const stripe = require('./routes/checkoutRoute');

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

const PORT = process.env.PORT || 5002;

app.use("/api/stripe",stripe)


app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT : ${PORT}`);
});