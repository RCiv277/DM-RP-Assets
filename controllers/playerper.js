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
        let o = '1'
        let t = '2'
        try{
        o = JSON.stringify(char.owner._id) 
        t = JSON.stringify(req.user._id) 
        }catch{ 
        res.render('char/othersChar',{
            char
        })
        return;}
        if(Object.is(o,t)){
            res.render('char/usersChar', {
                char,
                user:req.user})
        }
        else if(req.user.dm){
            res.render('dms/dmChar', {
                char,
                user:req.user })
        }
        else{
        res.render('char/othersChar', {
          char,
          user:req.user
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
    try{
    if(req.user.dm || !req.user.dm){
    res.render('char/newChar')}}
    catch{res.redirect('/')}
}

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
        try{
        let t = JSON.stringify(req.user._id) 
        let o = JSON.stringify(char.owner._id) 
        } catch{ let t = ''}
            if(Object.is(o,t)){
        res.render('char/playerCharEdit', {char,
        user:req.user})}
            else{
                res.redirect('/')
            }
    })
}

function editChar(req, res){
    Character.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal:false}, function(err, char){
    res.redirect(`/char`)
})
}


