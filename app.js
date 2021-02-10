// Set up requirements
const express = require('express');
const app = express();
const data = require('./data.json');
const routes = require('./routes.js');

// Set the view engine to pug
app.set('view engine', 'pug');

// Set up the routes handler
app.use('/', routes);

app.use('/static', express.static('public'));


// 404 error handler
app.use((req, res, next) => {
    res.send("404 error. See console log for more details ");
    err = new Error("This page cannot be found");
    err.status=404;
    console.log(`${err.message} - ${err.status} returned`);
    next();
})

// Global error handler
app.use((err, req, res, next) => {
    res.send("Server error. See console log for more details ");
    err.status = '500';
    err.message = 'Something really bad happened';
    console.log(`${err.status} - ${err.message}`);
    next();
  })


// Open port 3000
app.listen(3000, () => {
    console.log("listening on port 3000")
});