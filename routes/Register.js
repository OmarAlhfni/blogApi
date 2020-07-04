const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');

const { Users } = require('../models/Users')

router.post('/', (req, res) => {
    Users.create(req.body, (err, data) => {
        const { name, email, password } = data
        const tokin = jwt.sign({ name, email, password }, 'blogApi')
        // res.send({ data })
        console.log("tokin: ", tokin);
        console.log(data);
    })
})


router.post('/log', (req, res) => {
    const { email, password } = req.body
    Users.findOne({ email, password }, (err, user) => {
        if (user == null) {
            res.status(401)
            res.send("user is not found ")
        } else {
            const tokin = jwt.sign({ _id: user._id, name: user.name }, 'blogApi')
            res.json({ tokin })
        }
    })
})

module.exports = router