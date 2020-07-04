const mongoose = require('mongoose');

const { Schema } = mongoose;

const Schemas = new Schema({
    name: String,
    email: String,
    password: String
})

exports.Users = mongoose.model('Users', Schemas);