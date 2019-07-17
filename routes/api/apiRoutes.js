// Dependencies
// =============================================================
const Article = require('../../models/Articles');
const User = require('../../models/Users');

module.exports = function (app) {
// Article: GET ALL Articles
app.get('/articles/all', (req, res) => {
    Article.find()
    .sort({date: -1})
    .then(articles => res.json(articles))
});

// User: GET USER Data
app.get('/users/:useremail', (req, res) => {
    User.find({email: req.params.useremail})
})

};