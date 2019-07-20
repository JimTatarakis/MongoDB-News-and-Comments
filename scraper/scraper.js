// Dependencies
// =============================================================
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

// Scraper: Declares function to scrape, then return data
const scrape = (req, res) => {
    // Axios: Get URL data
    axios.get('https://www.foxnews.com/').then((response) => {
        const $ = cheerio.load(response.data);

        $('.title').each((i, element) => {

            let scrapeD = {};

            scrapeD.title = $(this).children('a').text();
            scrapeD.link = $(this).children('a').attr('href');

            db.Article.create(scrapeD)
                .then((dbArticle) => {
                    console.log(dbArticle);
                })
                .catch(err => console.log(err));

        });
    }).catch( err => console.log(err));

    res.send('scrape complete!');

};

module.exports = scrape;