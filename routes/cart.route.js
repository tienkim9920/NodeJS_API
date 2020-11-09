const express = require('express');

const cartController = require('../controller/cart.controller');

const router = express.Router()

router.get('/',cartController.index);
router.post('/',cartController.postIndex);

router.post('/add', cartController.addCart);
router.post('/delete',cartController.deleteCart);

module.exports = router