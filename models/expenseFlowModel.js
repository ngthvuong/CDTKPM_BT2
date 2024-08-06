const fs = require('fs');
const path = require('path');

const mainDataPath = path.join(process.cwd(), 'data/expenseFlows.json');

const getAll = () => {
	const items = fs.readFileSync(mainDataPath, 'utf8');
	return JSON.parse(items);
};

module.exports = {
	getAll
};
