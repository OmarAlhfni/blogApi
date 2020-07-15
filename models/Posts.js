const mongoose = require("mongoose");

const { Schema } = mongoose;

const ObjectId = mongoose.Schema.Types.ObjectId;
const Schemas = new Schema({
    title: String,
    body: String,
    categoty: { type: ObjectId, ref: "Catagories" },
    user: { type: ObjectId, ref: "Users" },
    tag: [{ type: ObjectId, ref: "Tags" }]
})

exports.Posts = mongoose.model('Posts', Schemas)