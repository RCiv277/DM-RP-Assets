var express = require('express');
var router = express.Router();
var charCTRL = require('../controllers/playerper')

/* GET home page. */
router.get('/', function(req, res, next){
  res.redirect('/char')
})


module.exports = router;
/*
function ifDmOrUser(){
  if (req.user.dm){

  }
  else if(req.user){

  }
  else{
    
  }
}

console.log('route index logged')*/
