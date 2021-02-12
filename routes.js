const express = require('express');
const router = express.Router();
const data = require('./data.json');

router.get('/', (req, res) => {
    res.render('../views/index', 
    {
        projects: data.projects
    });
})

router.get('/about', (req, res) => {
    res.render('../views/about');
})

router.get('/project/:id', (req, res) => {
    const id = req.params.id;
    res.render('../views/project',
        {
            id: id,
            project_title: data.projects[id].project_name,
            description: data.projects[id].description,
            tech: data.projects[id].technologies,
            live_link: data.projects[id].live_link,
            github_link: data.projects[id].github_link,
            pic1: data.projects[id].image_urls[0],
            pic2: data.projects[id].image_urls[1],
            pic3: data.projects[id].image_urls[2]
        });
})

module.exports = router;