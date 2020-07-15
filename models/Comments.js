const mongoose = require("mongoose");

const { Schema } = mongoose;

const Schemas = new Schema({
    body: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
})

exports.Comments = mongoose.model('comments', Schemas)