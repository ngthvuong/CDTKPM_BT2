const express = require('express');
const receiptAccountRouter = require('./receiptAccountRouter');
const expenseAccountRouter = require('./expenseAccountRouter');

const homeRouter = require('./homeRouter');

const router = express.Router();

router.use('/', homeRouter);
router.use('/account/receipt', receiptAccountRouter);
router.use('/account/expense', expenseAccountRouter);


module.exports = router;
