'use strict';

const receiptAccountModel = require('@models/receiptAccountModel');

const index = async (req, res) => {
	try {
		const receiptAccounts = await receiptAccountModel.getAll();
		res.render('receiptAccount/index', {
			receiptAccounts,
			title: 'Quản lý tài khoản thu'
		});
		res.send(JSON.stringify(accounts));
	} catch (error) {
		console.error('Error receiptAccountController:', error);
	}
};

module.exports = {
	index
};
