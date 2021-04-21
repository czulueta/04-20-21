const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customer: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Interior", interiorSchema)