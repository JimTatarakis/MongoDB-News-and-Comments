// HTML Routes
// =============================================================
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');
const articles = require('../../models/Article');
const comments = require('../../models/Comment');

    // GET: Scrape Landing
    router.get("/", controller.scrape);

    // GET: Home Page (/home)
    router.get("/home", controller.home);

    // GET: About Page (/about)
    router.get("/about", controller.about);

    // GET: Contact Page (/contact)
    router.get("/contact", controller.contact);

module.exports = router;