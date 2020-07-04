const express = require("express");
const router = express.Router();

const { Posts } = require('../models/Posts');

router.get('/get-posts', (req, res, next) => {
    Posts.find((err, Posts) => {
        res.json(Posts)
    })
})

router.get('/get-posts-by-id/:id', (req, res) => {
    const { id } = req.params
    Posts.findById({ _id: id }, (err, post) => {
        res.json(post)
    })
})

router.post('/create-post', (req, res, next) => {
    Posts.create(req.body, (err, Posts) => {
        res.json(Posts)
    })
})

router.put('/update-post/:id', (req, res) => {
    const { id } = req.params
    Posts.updateOne({ _id: id }, req.body, (err, Post) => {
        res.json(Post)
    })
})

router.delete('/delete-posts-by-id/:id', (req, res) => {
    const { id } = req.params
    Posts.deleteOne({ _id: id }, (err, Posts) => {
        res.json(Posts)
    })
})

module.exports = router;