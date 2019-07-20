// Dependencies
// =============================================================
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require('morgan');
const axios = require('axios');
const cheerio = require('cheerio');

require("dotenv").config();

// Sets up the Express App
// =============================================================
const app = express();

// Bodyparser: Bodyparser Middleware
// =============================================================
app.use(bodyParser.json());

// Morgan: Log Requests
// =============================================================
app.use(logger('dev'));

// Sets up Static Folder
// =============================================================
app.use(express.static('public'));

// Sets up Handlebars
// =============================================================
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// DB: Config
// =============================================================
const mongodb = require('./config/config').mongoURI;

// DB: Require Models
// =============================================================
const db = require('./models');

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
.connect(mongodb,{ useNewUrlParser: true, useFindAndModify: false })
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));


// Server: Requires the html-Routes
// =============================================================
app.use('/', require('./routes/html/htmlRoutes'));

// Server: Requires the api-Routes
// =============================================================
app.use('/api', require('./routes/api/apiRoutes'));


// Server: Define Port
// =============================================================
const port = process.env.PORT || 5000;

// Server: Starts our Express Server
// =============================================================
app.listen(port, ()=> console.log(`Server started on port ${port}`));