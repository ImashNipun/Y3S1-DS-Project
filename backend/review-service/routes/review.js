const express=require('express')
const router=express.Router()
const {
    getReview,
    creatReview
}=require('../controller/reviewController')

//get all the review
router.get('/',getReview)

//add a review
router.post('/',creatReview)

module.exports=router