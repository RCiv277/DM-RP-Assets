var mongoose = require('mongoose')


var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    dm: {type:Boolean ,default:false},
    email: String
})

module.exports = mongoose.model('User', userSchema)