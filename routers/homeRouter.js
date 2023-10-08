const express = require('express');
const routes = express.Router();
const {createProject,fetchProjects} = require('../controllers/createProject')

routes.get("/", async (req, res) => {
    res.render("home")
})

routes.post("/create",createProject);
routes.get("/fetchprojects",fetchProjects)

module.exports = routes;