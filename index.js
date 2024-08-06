require('module-alias/register');
const path = require('path');

const express = require('express');
const app = express();

const { create } = require('express-handlebars');
const hbs = create({
	extname: 'hbs',
	defaultLayout: 'layout',
	layoutDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const router = require('@routes');
app.use(router);

app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
	res.status(404).send("404: page does not found.")
});
app.use((req, res, next) => {
	res.status(500).send("500: Internal Server Error")
});

app.listen(5000, () => {
	console.log('Server is listening port 5000');
});
