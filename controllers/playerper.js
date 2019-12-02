const Character = require('../model/character')
const User = require('../model/user')

module.exports = {
    show,
    genCreateForm
}
/*    newChar,
    editChar,
    editLevel */

function show(req, res){
    console.log('Showing Char Index')
    Character.find({}, function(err, characters){
        if (err) console.log(err)
        res.render('char/index', {title: 'Characters', characters})
    })
}
function genCreateForm(req, res){
    res.render('char/newChar')
}
console.log('controller playerper logged')