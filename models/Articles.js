const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp');

// Mongoose/MongoDB: Generates new Schema for Articles
const ArticleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
    },
    comments: {
        type: Array,
    },
    article_id: {
        type: String,
        required: true,
    }
    
});

// TimeStamp: adds 'created_at' and 'updated_at' properties to ArticleSchema
ArticleSchema.plugin(timestamp);

module.exports = ArticleData = mongoose.model('ArticleData', ArticleSchema);