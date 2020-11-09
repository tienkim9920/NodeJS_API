const express = require('express');

const authController = require('../controller/auth.controller');

const router = express.Router()

router.post('/',authController.login);
module.exports = router