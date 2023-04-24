const mongoose=require('mongoose')

const schema=mongoose.Schema

const productSchema=new schema({
    image:{
        type:String,
        require:true
    },
    tital:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{timestamps:true})
module.exports=mongoose.model('product',productSchema)
