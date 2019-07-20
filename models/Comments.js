const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp');


// Child Schema for Comments
const CommentSchema = new Schema({
    title: {
        type: String
    },
    comment: {
        type: String
    }
})

// TimeStamp: adds 'created_at' and 'updated_at' properties to ArticleSchema
CommentSchema.plugin(timestamp);

module.exports = Comments = mongoose.model('comment', CommentSchema);