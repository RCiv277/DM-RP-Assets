var mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    dm: {type:Boolean ,default:false},
    email: String
})

module.exports = mongoose.model('User', userSchema)