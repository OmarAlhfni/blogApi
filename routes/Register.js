const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');

const hashPass = require('../helper/passwoed');

const { Users } = require('../models/Users')

router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    Users.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.json('is already existing');
        } else {
            const hash = await hashPass(password)
            Users.create({ email, name, password: hash }, (err, data) => {
                const { _id, name, email } = data
                const token = jwt.sign({ _id, name, email }, 'blogApi')
                res.send({ token, isAdmin: data.isAdmin })
                console.log("data: ---", data);

            })
        }
    })
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const hasher = await hashPass(password);
    Users.findOne({ email, password: hasher }, (err, user) => {
        if (user == null) {
            res.status(401)
            res.send("user is not found ")
        } else {
            const { _id, name, isAdmin } = user
            const token = jwt.sign({ _id, name, isAdmin }, 'blogApi')
            res.json({ token, isAdmin: user.isAdmin })
            console.log(`hi ${name}`);
        }
    })
})

module.exports = router