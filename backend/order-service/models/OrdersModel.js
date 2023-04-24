const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },

    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } ,unit_amount:{ type: Number, required: true }},
    ],

    subtotal: { type: Number, required: true },

    total: { type: Number, required: true },

    // shipping: { type: Object, required: true },

    shipping: { 
      city: {type: String, required: true},
      country: {type: String, required: true},
      line1: {type: String, required: true},
      line2: {type: String, required: true},
      postal_code: {type: String, required: true},
      state: {type: String, required: true}
    },

    order_status: { type: String, default: "pending" },
    
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


// "shipping": {
//   "address": {
//     "city": "kkemwk",
//     "country": "US",
//     "line1": "dwkdkw",
//     "line2": "dkwndnwk",
//     "postal_code": "02000",
//     "state": "MA"
//   },
//   "name": "dwndw"
// },


 // shipping: { type: Object, required: true },

 /*
 
 shipping: { 
  city: {type: String, required: true},
  country: {type: String, required: true},
  line1: {type: String, required: true},
  line2: {type: String, required: true},
  postal_code: {type: String, required: true},
  state: {type: String, required: true}
},

 
 
 
 
 */ 