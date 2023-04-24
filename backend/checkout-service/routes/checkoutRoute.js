// This is your test secret API key.
const express = require('express');
const {makeACheckout,stripeWebhook} = require('../controller/checkoutController');

const router = express.Router();

router.post('/create-checkout-session',makeACheckout);
router.post('/webhook', express.raw({type: 'application/json'}),stripeWebhook); 

module.exports = router;

