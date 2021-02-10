const express = require('express');
const router = express.Router();
const data = require('./data.json');

router.get('/', (req, res) => {
    res.render('../views/index');
})

router.get('/about', (req, res) => {
    res.render('../views/about');
})

router.get('/project/:id', (req, res) => {
    res.render('../views/project');
    console.log(req.params.id);
} )

module.exports = router;