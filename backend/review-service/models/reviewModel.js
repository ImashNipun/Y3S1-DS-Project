const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        userID:{
            type: String,
            required:true
        },
        description:{
            type: String,
            required:true
        }, 
        productID:{
            type: String,
            required:true
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Review", reviewSchema);
