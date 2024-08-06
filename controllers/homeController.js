const index = async (req, res) => {
	try {
		res.render('home/index', {
			title: 'Trang Chủ'
		});
	} catch (error) {
		console.error('Error homeController:', error);
	}
};

module.exports = {
	index
};
