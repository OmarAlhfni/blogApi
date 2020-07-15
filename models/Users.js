const mongoose = require('mongoose');

const { Schema } = mongoose;

const Schemas = new Schema({
    name: String,
    email: String,
    isAdmin: { type: Boolean, default: false },
    password: String
})

exports.Users = mongoose.model('Users', Schemas);