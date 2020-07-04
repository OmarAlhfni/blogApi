var express = require('express');
var router = express.Router();
var { Users } = require('../models/Users')

/* GET users listing. */
router.get('/get-user', (req, res, next) => {
  Users.find((err, Users) => {
    res.json(Users)
  })
});

router.delete('/delete-user/:id', (req, res, next) => {
  const { id } = req.params;
  Users.deleteOne({ _id: id }, (err, data) => {
    res.json(data)
  })
})

module.exports = router;
