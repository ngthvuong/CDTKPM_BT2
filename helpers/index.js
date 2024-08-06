const handlebars = require('handlebars');
const moment = require('moment');

handlebars.registerHelper('incrementedIndex', function(index) {
	return index + 1;
});
handlebars.registerHelper('dateFormat', function(date) {
	return moment(date).format('DD/MM/YYYY');
});

handlebars.registerHelper('formatAmount', function(amount) {
	return Number(amount).toLocaleString();
});

handlebars.registerHelper('colorClass', function(index) {
    const colorIndex = index % 2;
    const colors = ['odd_color', 'even_color'];
    return colors[colorIndex];
});


module.exports = {
	incrementedIndex: handlebars.helpers.incrementedIndex,
	dateFormat: handlebars.helpers.dateFormat,
    formatAmount: handlebars.helpers.formatAmount,
	colorClass: handlebars.helpers.colorClass
};