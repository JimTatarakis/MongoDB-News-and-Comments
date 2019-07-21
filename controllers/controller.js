// Controller: Dependencies
// =============================================================
const mongoose = require('mongoose');
const articles = require('../models/Article');
const comments = require('../models/Comment');
const axios = require('axios');
const cheerio = require('cheerio');

// Controller: HTML Request
// =============================================================
// HTML: Scrape Page : Works!
exports.scrape = (req, res) => {
    // Axios: Get URL data
    // First, we grab the body of the html with axios
    axios.get("https://www.arstechnica.com/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("header").each(function (i, element) {
            // Save an empty result object
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children("h2")
                .children("a")
                .text();
            result.excerpt = $(this)
                .children("p.excerpt")
                .text();
            result.link = $(this)
                .children("h2")
                .children("a")
                .attr("href");
            // Create a new Article using the `result` object built from scraping
            articles.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });
        res.render('scrape', { layout: 'scraper.handlebars' });
    });
};

// HTML: Home Page
exports.home = (req, res) => {
    let limitData = [];
    articles.find({})
        .populate('comments')
        .then((articleData) => {
            for(let i = 0; i < 10; i++){
                limitData.push(articleData[i]);
            }
            console.log(limitData);
            res.render('home', limitData);
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