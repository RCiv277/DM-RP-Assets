const mongoose = require('mongoose')

const dmSchema = new mongoose.Schema({
    name: {type: String , maxlength: 30},
    valueone: {type:String},
    valuetwo: {type:String},
    valuethree: {type:String}
})

module.exports = mongoose.model("DM" , dmSchema)