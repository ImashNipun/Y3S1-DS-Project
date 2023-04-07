const express = require('express');
const {createNewProduct} = require('../controllers/productController');

const router = express.Router();

router.post('/products',createNewProduct);

module.exports = router;





