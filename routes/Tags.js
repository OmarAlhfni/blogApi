const express = require("express");
const router = express.Router();

const { Tages } = require('../models/Tags');

router.get('/get-tags', (req, res, next) => {
    Tages.find((err, Tags) => {
        res.json(Tags)
    })
})

router.get('/get-tag-by-id/:id', (req, res) => {
    const { id } = req.params
    Tages.findById({ _id: id }, (err, tag) => {
        res.json(tag)
    })
})

router.post('/create-tag', (req, res, next) => {
    Tages.create(req.body, (err, Tags) => {
        res.json(Tags)
    })
})

router.put('/update-tag/:id', (req, res) => {
    const { id } = req.params
    Tages.updateOne({ _id: id }, req.body, (err, tag) => {
        res.json(tag)
    })
})

router.delete('/delete-tag-by-id/:id', (req, res) => {
    const { id } = req.params
    Tages.deleteOne({ _id: id }, (err, tag) => {
        res.json(tag)
    })
})

module.exports = router;