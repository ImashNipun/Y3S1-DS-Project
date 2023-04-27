require('dotenv').config()
const express=require('express')
const mongoose= require('mongoose')
const cors = require("cors");

const reviewRoutes=require('./routes/review')

//express app
const app=express()

//middle ware
app.use(express.json())
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/review',reviewRoutes)

//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT,()=>{
            console.log("connected to the database and listning on port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })