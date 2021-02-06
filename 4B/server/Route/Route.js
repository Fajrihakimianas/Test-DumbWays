const express = require('express');
const router = express.Router();

const product = require('../Controller/Product');
const user = require('../Controller/User');

router.get('/get-product', product.getProduct);
router.post('/create-product', product.createProduct);

router.post('/register', user.registerUser);
router.post('/login', user.userLogin);

module.exports = router;