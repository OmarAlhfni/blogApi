const express = require("express");
const router = express.Router();

const { Catagories } = require('../models/Catagories');

router.get('/get-catagories', (req, res, next) => {
    Catagories.find((err, Catagories) => {
        res.json(Catagories)
    })
})

router.get('/get-catagories-by-id/:id', (req, res) => {
    const { id } = req.params
    Catagories.findById({ _id: id }, (err, Catagories) => {
        res.json(Catagories)
    })
})

router.post('/create-catagories', (req, res, next) => {
    Catagories.create(req.body, (err, Catagories) => {
        res.json(Catagories)
    })
})

router.put('/update-catagories/:id', (req, res) => {
    const { id } = req.params
    Catagories.updateOne({ _id: id }, req.body, (err, Catagories) => {
        res.json(Catagories)
    })
})

router.delete('/delete-catagories-by-id/:id', (req, res) => {
    const { id } = req.params
    Catagories.deleteOne({ _id: id }, (err, Catagories) => {
        res.json(Catagories)
    })
})

module.exports = router;