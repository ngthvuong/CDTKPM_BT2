const express = require('express');
const expenseAccountController = require('@controllers/expenseAccountController');

const router = express.Router();
router.get('/', expenseAccountController.index);

module.exports = router;
