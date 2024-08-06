'use strict';

const receiptFlowModel = require('@models/receiptFlowModel');
const expenseFlowModel = require('@models/expenseFlowModel');

const index = async (req, res) => {
	try {
		const analysisInfo = {
			receiptFlows: await receiptFlowModel.getAll(),
			expenseFlows: await expenseFlowModel.getAll()
		};
		analysisInfo.totalReceiptAmount = analysisInfo.receiptFlows.reduce((sum, { amount }) => sum + amount, 0);
		analysisInfo.totalExpenseAmount = analysisInfo.expenseFlows.reduce((sum, { amount }) => sum + amount, 0);
		analysisInfo.totalAmount = analysisInfo.totalReceiptAmount + analysisInfo.totalExpenseAmount


		res.render('analysis/index', {
			analysisInfo,
			title: 'Thống Kê Thu Chi'
		});
	} catch (error) {
		console.error('analysisController:', error);
	}
};

module.exports = {
	index
};
