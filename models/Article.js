const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const comments = require('./Comment');

// Mongoose/MongoDB: Generates new Schema for Articles
const ArticleSchema = new Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
        default: 'No link today!'
    },
    excerpt: {
        type: String,
        default: 'No summary this time!'
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }
    
});

module.exports = Articles = mongoose.model('article', ArticleSchema);