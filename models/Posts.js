const mongoose = require("mongoose");

const { Schema } = mongoose;

const Schemas = new Schema({
    title: String,
    body: String,
    author: String,
    catagoriesId: String
})

exports.Posts = mongoose.model('Posts', Schemas)