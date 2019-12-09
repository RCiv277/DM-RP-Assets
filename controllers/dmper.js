const DM = require('../model/dm')
const User = require('../model/user')

module.exports = {
    showAllDms,
    dmForm,
    editValues,
    upgradeToDm,
    newDmForm,
    generateTheDm
}
function dmForm(req, res){          //  /dm/new
    if(!req.user.dm){
        res.render('dms/dmCode')
    }
    else{
        res.redirect('/dm')
    }
}

function upgradeToDm(req, res){   
    if(Object.is(req.body.password,'Zacisthec00lest')){
        User.findById(req.user._id , function(err, dm){
            dm.dm = true
            dm.save()

        })   
        res.redirect('/dm/create')
    }
    else{
        res.redirect('/dm')
    }
} 
/*
function upgradeToDm(req, res){
    console.log(req.body)
    res.redirect('/dm')
} 
*/
function showAllDms(req, res){         // /dm
    DM.find({}, function(err, dm){
        if (err) console.log(err)
        res.render('dms/dmIndex', {
            dm,
            user:req.User})
    })
} 

function newDmForm(req, res){
    try{
        if(!req.user.dm){
            res.render('dms/dmNew')
        }
    } catch {
        res.redirect('/')
    }
}

function generateTheDm(req, res){
  req.body.owner = req.user
  let createdDm = new DM(req.body);
  DM.create(createdDm, function(err) {
    if (err) {
      console.log(err)
      res.redirect('/')
      return}
    else{//send the error to the browser
    res.redirect('/char')
    }
  })
}

function editValues(){

}