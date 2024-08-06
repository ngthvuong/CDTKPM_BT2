const express = require('express');
const receiptAccountController = require('@controllers/receiptAccountController');

const router = express.Router();
router.get('/', receiptAccountController.index);

module.exports = router;
