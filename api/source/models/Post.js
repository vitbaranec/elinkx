const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    servis: {
        type: String,
        required: true
    },

    years: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Posts", PostSchema);