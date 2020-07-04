const mongoose = require("mongoose");

const { Schema } = mongoose;

const Schemas = new Schema({
    name: String
})

exports.Tages = mongoose.model('Tags', Schemas)