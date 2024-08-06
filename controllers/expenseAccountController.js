'use strict';

const expenseAccountModel = require('@models/expenseAccountModel');

const index = async (req, res) => {
	try {
		const expenseAccounts = await expenseAccountModel.getAll();
		res.render('expenseAccount/index', {
			expenseAccounts,
			title: 'Quản lý tài khoản chi'
		});
		res.send(JSON.stringify(accounts));
	} catch (error) {
		console.error('expenseAccountController:', error);
	}
};

module.exports = {
	index
};
