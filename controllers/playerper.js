const Character = require('../model/character')
const User = require('../model/user')

module.exports = {
    showAllChars,
    genCreateForm,
    createChar,
    showChar,
    editCharForm,
    editChar
}
/*    newChar,
    editChar,
    editLevel */
function showChar(req, res){
    Character.findById(req.params.id, function(err, char){
        let o = JSON.stringify(char.owner._id) 
        let t = JSON.stringify(req.user._id) 
        
        if(Object.is(o,t)){
            res.render('char/usersChar', {
                char})
        }
        else if(req.user.dm){
            res.render('dms/dmChar', {char })
        }
        else{
        res.render('char/othersChar', {
          char
        })}
    })
}

function showAllChars(req, res){
    let sortKey = req.query.sort || 'name'
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
    req.body.owner = req.user
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

function editCharForm(req, res){
    Character.findById(req.params.id, function(err, char){
        res.render('char/playerCharEdit', {char})
    })
}

function editChar(req, res){
    Character.findOneAndUpdate(req.params.id, req.body, {new:true}, function(err, char){
        if(err)console.log(err)
        char.save()
        console.log(char)
        res.redirect(`/char/${req.params.id}`)
    })
}

