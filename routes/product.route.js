const express = require('express');

var productController = require('../controller/product.controller');

const router = express.Router()

router.get('/', productController.index);


module.exports = router