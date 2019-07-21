const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Child Schema for Comments
const CommentSchema = new Schema({
    title: {
        type: String
    },
    comment: {
        type: String
    }
})

module.exports = Comment = mongoose.model('comment', CommentSchema);