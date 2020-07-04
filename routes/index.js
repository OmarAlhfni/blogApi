const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/api', (req, res) => {
    var token = jwt.sign({ firstName: "omar", lastName: "dec" }, 'blogApi')
    res.send({ token });
    console.log(token);
    
})

module.exports = router;