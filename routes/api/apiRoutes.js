// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const articles = require('../../models/Articles');
const comments = require('../../models/Comments');

// Articles Routes
// =============================================================
// Articles: GET ALL Articles
router.get('/articles', (req, res) => {
    articles.find({})
        .sort({ date: -1 })
        .then(Articles => res.json(Articles)).catch(err => console.log(err));
});

// Comment Routes
// =============================================================
// Comment: Find an Article and its Comments
router.get('/comments', (req, res) => {
    // Comment: Save req.body
    const { article_id } = req.body;

    // Comment: Find populate Comments
    articles.findOne({ _id: article_id })
        .populate('comments')
        .then(comments => res.json(comments)).catch(err => console.log(err));
});

// Comment: Add/Update Comment
router.post('/comments', (req, res) => {
    // Comment: Save req.body
    const { title, comment, article_id } = req.body;

    const newComment = {
        title,
        comment
    }

    comments.create(newComment)
    .then((dbComment) => {
        return articles.findOneAndUpdate({ _id : article_id }, {comments: dbComment._id}, {new:true});
    })
    .then( dbArticle => res.json(dbArticle))
    .catch( err => res.json(err));

});

// Comment: Delete Comment
router.delete('/comments/delete', (req, res) => {
    // Comment: Save Request Data as Const
    const { comment_id } = req.body;

    comments.findById({ _id : comment_id }).remove().exec();

    res.json({msg:`comment ${comment_id} deleted!`});

});

router.get('/test', (req, res) => {
    res.send('msg: test works!')
});

// TEST
router.get('/comments', (req, res) => {
    const { comment_id, comment, _id } = req.body;

    articles.findOne({ '_id': _id }, { '$._id': comment_id }, comment => res.json(comment), err => console.log(err));
})

module.exports = router;