const express = require("express");
const router = express.Router();

const { Comments } = require('../models/Comments');

router.get('/get-comments', (req, res, next) => {
    Comments.find((err, Comments) => {
        res.json(Comments)
    }).populate(['user', 'post'])
})

router.post('/create-comments', (req, res, next) => {
    Comments.create(req.body, (err, Comments) => {
        res.json(Comments)
    })
})

router.delete('/delete-comments-by-id/:id', (req, res) => {
    const { id } = req.params
    Comments.deleteOne({ _id: id }, (err, Comments) => {
        res.json(Comments)
    })
})


module.exports = router;
