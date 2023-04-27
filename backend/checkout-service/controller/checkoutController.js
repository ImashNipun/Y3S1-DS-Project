const Stripe = require("stripe");
require("dotenv").config();
const axios = require("axios");
let endpointSecret;
// endpointSecret =
//   "whsec_8d3f13404fa343ad1780924c598d84b847dff91a119169b0f879bc5ce1860c82";

const stripe = Stripe(
  "sk_test_51MzASQCqzSR1UB2eMsDHitJ4OeQizkxaYUySMVae15qauDPxmakT24IfGl0iMa5Jr3CvpDyT84CRXRBnyzvQv2pZ00PtWqEuiE"
);



//-------------------------------------------------------------------------------------------------------
//handle the order creation after completed payment

const handleOrder = (data, customer, lineItems) => {
  const allProducts = lineItems.data;
  const productData = allProducts.map((item) => {
    return {
      productId: item.description,
      quantity: item.quantity,
      unit_amount: item.price.unit_amount/100.0,
    };
  });

  let userId, subtotal, total, payment_status, products, shipping;

  userId = customer.metadata.userId;
  products = productData;
  subtotal = data.amount_subtotal/100.0;
  total = data.amount_total/100.0;
  shipping = data.shipping_details.address;
  payment_status = data.payment_status;

  axios
    .post("http://localhost:5003/api/orders/", {
      userId,
      products,
      subtotal,
      total,
      shipping,
      payment_status,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
};





//------------------------------------------------------------------------------------
//create a checkout using stripe payment gateway

const makeACheckout = async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: "1234",
    },
  });

  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.id,
          images: [item.image],
          description: item.title,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ["US", "CA"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 1500, currency: "usd" },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 1 },
          },
        },
      },
    ],
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cart`,
  });

  res.send({ url: session.url });
};






//--------------------------------------------------------------------------------------------
//Stripe webhook - used to fetch data from payment in stripe

const stripeWebhook = (req, res) => {
  const sig = req.headers["stripe-signature"];

  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("webhook verified");
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event

  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          stripe.checkout.sessions.listLineItems(
            data.id,
            {},
            function (err, lineItems) {
              console.log(data);
              handleOrder(data, customer, lineItems);
            }
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
};

module.exports = {
  makeACheckout,
  stripeWebhook,
};
