// Set up requirements
const express = require('express');
const app = express();
app.use(express.static('public'));
const data = require('./data.json');
const routes = require('./routes.js');

// Set the view engine to pug
app.set('view engine', 'pug');

app.use('/', routes);

app.listen(3000, () => {
    console.log("listening on port 3000")
});