const mongoose = require('mongoose')

const dmSchema = new mongoose.Schema({
    name: {type: String , maxlength: 30},
    user: "current user",
    values: {type: Array, default:[], maxlength: 3}
})

module.exports = mongoose.model("DM" , dmSchema)