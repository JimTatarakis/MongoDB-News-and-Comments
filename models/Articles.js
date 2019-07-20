const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp');

// Mongoose/MongoDB: Generates new Schema for Articles
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }
    
});

// TimeStamp: adds 'created_at' and 'updated_at' properties to ArticleSchema
ArticleSchema.plugin(timestamp);

module.exports = Articles = mongoose.model('article', ArticleSchema);