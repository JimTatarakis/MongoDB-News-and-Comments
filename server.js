// Dependencies
// =============================================================
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();

// Bodyparser: Bodyparser Middleware
// =============================================================
app.use(bodyParser.json());

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
const db = require('./config/keys').mongoURI;

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
.connect(db,{ useNewUrlParser: true})
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));


// Server: Requires the html-Routes
// =============================================================
require('./routes/html/htmlRoutes')(app);

// Server: Requires the api-Routes
// =============================================================
require('./routes/api/apiRoutes')(app);


// Server: Define Port
// =============================================================
const port = process.env.PORT || 5000;

// Server: Starts our Express Server
// =============================================================
app.listen(port, ()=> console.log(`Server started on port ${port}`));