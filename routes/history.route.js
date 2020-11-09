const express = require('express');

const historyController = require('../controller/history.controller');

const router = express.Router()

router.get('/',historyController.index);
module.exports = router