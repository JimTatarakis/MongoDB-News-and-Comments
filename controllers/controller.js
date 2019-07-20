// Controller: Dependencies
// =============================================================
const mongoose = require('mongoose');
const Article = require('../models/Articles');
const User = require('../models/Users');

// Controller: HTML Request
// =============================================================

// HTML: Login Page
exports.index = (req, res) => {

    res.render('index', { layout: 'login.handlebars' });
}

// HTML: Register Page
exports.registration = (req, res) => {

    res.render('registration', { layout: 'login.handlebars' });
}

// HTML: Home Page
exports.home = (req, res) => {
    const { email, password } = req.body;
    const currentUser = {
        email,
        password
    }
    // User: Retrieve data and compare passwords
    // User: After Match make Request for Articles
    User.findOne({ email })
        .then((userData) => {
            if (userData.password !== currentUser.password) {
                res.sendStatus(404);
            }
            Article.find()
                .sort({ date: -1 })
                .then((articleData) => {
                    const homeData = { userData, articleData };

                    res.render('home', homeData);
                }).catch(err => console.log(err));
        }).catch(err => console.log(err));
}

// HTML: Comments Page
exports.comments = (req, res) => {
    const { email, password, user_name, user_id } = req.body;
    const currentUser = {
        email,
        password,
        user_name,
        user_id
    }
    // User: Retrieve data and compare passwords
    // User: After Match make Request for Articles
    User.findOne({ email })
        .then((userData) => {
            if (userData.password !== currentUser.password) {
                res.sendStatus(404);
            }
            // Article: Find comments with user_id
            Article.find({'user_id': currentUser.user_id})
                .sort({ date: -1 })
                .then((articleData) => {

                    // Article: Make and object with data
                    const commentsData = { currentUser, articleData };

                    res.render('comments', commentsData);
                }).catch(err => console.log(err));
        }).catch(err => console.log(err));
}

// HTML: About Page
exports.about = (req, res) => {
    res.render('about');
}

// HTML: Contact Page
exports.contact = (req, res) => {
    res.render('contact');
}