const Review=require('../models/reviewModel')

//get all review
const getReview=async(req,res)=>{
    const reviews=await Review.find({}).sort({createAt:-1})
    res.status(200).json(reviews)
}

// add review
const creatReview=async(req,res)=>{
    //add data to db
    const{userID,description,productID}=req.body
    try{
        const review=await Review.create({userID,description,productID})
        res.status(200).json(review)
    }catch(error){
        res.status(400).json({error:error.messager})
    }
}
module.exports={
    getReview,
    creatReview
}