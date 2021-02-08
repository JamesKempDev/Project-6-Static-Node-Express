const express = require('express');
const router = express.Router();
const data = require('./data.json');

router.get('/', (req, res, next) => {
    console.log('Home page');
    console.log(data.projects);
    next();
})

router.get('/about', (req, res, next) => {
    res.render('../views/about');
})

module.exports = router;