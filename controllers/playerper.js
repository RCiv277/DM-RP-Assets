const Character = require('../model/character')
const User = require('../model/user')

module.exports = {
    showAllChars,
    genCreateForm,
    createChar,
    showChar
}
/*    newChar,
    editChar,
    editLevel */

function showChar(req, res){
    Character.findById(req.params.id, function(err, char){
        res.render('char/othersChar', {
          char
        })
    })
}

function showAllChars(req, res){
    console.log('Showing Char Index')
    Character.find({}, function(err, characters){
        if (err) console.log(err)
        res.render('char/index', {title: 'Characters', characters})
    })
}
function genCreateForm(req, res){
    res.render('char/newChar')
}
function createChar(req, res, next){
    Character.create(req.body, function(err, characters){
        characters.save(()=>{
        res.redirect('/')}
        )
    })
}
function createChar(req, res) {
    let createdChar = new Character(req.body);
    Character.create(createdChar, function(err) {
      if (err) {
        console.log(err)
        res.redirect('/')
        return}
      else{//send the error to the browser
      
      res.redirect('/char')
      }
    });
  }
console.log('controller playerper logged')


function assignClass(spec){
    if(spec = 'Artificer'){
        
        }
}
