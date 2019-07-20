// HTML Routes
// =============================================================
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller');
const articles = require('../../models/Articles');
const comments = require('../../models/Comments');

    // GET: Login page (/)
    router.get("/", controller.index);

    // GET: Register page (/registration)
    router.get("/registration", controller.registration);

    // GET: Home Page (/home)
    router.get("/home", controller.home);

    // GET: About Page (/about)
    router.get("/about", controller.about);

    // GET: Contact Page (/contact)
    router.get("/contact", controller.contact);

module.exports = router;