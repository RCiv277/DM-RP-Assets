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
        let o = JSON.stringify(char.owner) 
        let t = JSON.stringify(req.user) 
        if(Object.is(o,t)){
            console.log('the same')
            res.render('char/usersChar', {
                char
            })
        }
        else if(req.user.dm){
            res.render('dms/dmChar')
        }
        else{
        res.render('char/othersChar', {
          char
        })}
    })
}

function showAllChars(req, res){
    let sortKey = req.query.sort || 'name'
    console.log('Showing Char Index')
    console.log(req.isAuthenticated())
    Character.find({}, function(err, characters){
        if (err) console.log(err)
        res.render('char/index', {
        title: 'Characters', 
        characters,
        loggedIn: req.isAuthenticated(),
        user: req.user,
        name: req.query.name,
        sortKey})
    })
}
function genCreateForm(req, res){
    res.render('char/newChar')
}
/*function createChar(req, res, next){
    Character.create(req.body, function(err, characters){
        characters.save(()=>{
        res.redirect('/')}
        )
    })
} */
function createChar(req, res) {
    console.log(req.body)
    req.body.owner = req.user
    console.log(req.body.name + '-------------------------------')
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


