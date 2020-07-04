const mongoose = require("mongoose");

const { Schema } = mongoose;

const Schemas = new Schema({
    name: String
})

exports.Catagories = mongoose.model('Catagories ', Schemas)