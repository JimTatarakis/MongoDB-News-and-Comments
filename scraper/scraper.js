// Dependencies
// =============================================================
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../models');

// Scraper: Declares function to scrape, then return data
const scrape = (req, res) => {
    // Axios: Get URL data
    axios.get('https://www.arstechnica.com/').then((response) => {
        const $ = cheerio.load(response.data);

        $('header').each((i, element) => {

            // an object to hold the scraped Data 
            let scrapeD = {};

            // add Data to object
            scrapeD.title = $(this).children('h2 a').text();
            scrapeD.link = $(this).children('h2 a').attr('href');
            scrapeD.summary = $(this).children('p.excerpt').text();

            // create article with scraped object Data
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