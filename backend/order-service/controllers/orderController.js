const Order=require('../models/OrdersModel')
const mongoose=require('mongoose')

// get all orders
const getOrders=async(req,res)=>{
    const orders=await Order.find({}).sort({createAt:-1})

    res.status(200).json(orders)
}
//get a single order

const getOrder=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const order=await Order.findById(id)

    if(!order){
        return res.status(404).json({error:'no such oerder'})
    }

    res.status(200).json(order)
}

//add a order
const creatOrder=async(req,res)=>{

    //add data to db
    const {userId,products,subtotal,total,shipping,order_status,payment_status}=req.body
    try{
        const order=await Order.create({userId,products,subtotal,total,shipping,order_status,payment_status})
        res.status(200).json(order)
    }catch(error){
        console.log(error);
        res.status(400).json({error:error})
    }
    
}
//delete order
const deleteOrder= async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const order=await Order.findOneAndDelete({_id:id})

    if(!order){
        return res.status(404).json({error:'no such oerder'})
    }

    res.status(200).json(order)
    
}

//update order
const updateOrder= async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }
    const order =await Order.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!order){
        return res.status(404).json({error:'no such oerder'})
    }

    res.status(200).json(order)
}


module.exports={
    creatOrder,
    getOrder,
    getOrders,
    deleteOrder,
    updateOrder
}
