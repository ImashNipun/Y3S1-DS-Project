const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    raMediName : String,
    raMediDesc : String
});

module.exports = productModel = mongoose.model("Products",productSchema);