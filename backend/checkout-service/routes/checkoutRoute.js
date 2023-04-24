// This is your test secret API key.
const express = require('express');
const {makeACheckout} = require('../controller/checkoutController');

const router = express.Router();

router.post('/create-checkout-session',makeACheckout);

module.exports = router;

