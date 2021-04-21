const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exteriorSchema = new Schema({
    customer: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Exterior", exteriorSchema)