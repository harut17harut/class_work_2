const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
var expressLayouts = require('express-ejs-layouts');

const {
    HOST,
    PORT,
} = process.env;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.set('layout', 'layouts/blank');

app.use(express.static('public'));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`started: ${HOST}:${PORT}`)
})