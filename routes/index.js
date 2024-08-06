const express = require('express');
const receiptAccountRouter = require('./receiptAccountRouter');
const expenseAccountRouter = require('./expenseAccountRouter');
const analysisRouter = require('./analysisRouter');
const homeRouter = require('./homeRouter');

const router = express.Router();

router.use('/', homeRouter);
router.use('/account/receipt', receiptAccountRouter);
router.use('/account/expense', expenseAccountRouter);
router.use('/analysis', analysisRouter);


module.exports = router;
