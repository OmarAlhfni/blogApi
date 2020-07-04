const mongoose = require("mongoose");

const { Schema } = mongoose;

const Schemas = new Schema({
    post: String,
    body: String,
    postId: String,
})

exports.Comments = mongoose.model('comments', Schemas)