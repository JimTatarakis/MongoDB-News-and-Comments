// Dependencies
// =============================================================
const api = require('././api/apiRoutes');

// Routes
// =============================================================
module.exports = function (app) {

    // GET: Login page (/)
    app.get("/", function (req, res) {
        res.render('index', {layout: 'login.handlebars'});
    });

    // GET: Home Page (/home)
    app.get("/home", function (req, res) {
        // make req to api and get data (articles + comments)
        res.render('home');
    });

    // GET: User Comments Page (/comments)
    app.get("/comments/:userid", function (req, res) {
        // make req to api and get data (comments) WHERE user id is present
        let userID = req.params.userid;
        let userData = {
            userID: userID
            // userComments: data (data is from req to api)
        }
        res.render('comments', userData);
    });

    // GET: About Page (/about)
    app.get("/about", function (req, res) {
        res.render('about');
    });

    // GET: Contact Page (/contact)
    app.get("/contact", function (req, res) {
        res.render('contact');
    });

};