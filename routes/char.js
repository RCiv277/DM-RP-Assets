var express = require('express');
var router = express.Router();
var charCTRL = require('../controllers/playerper')

/* GET home page. */
router.get('/', charCTRL.show)
router.get('/char', charCTRL.show)
router.get('/char/new', charCTRL.genCreateForm)

module.exports = router;

function ifDmOrUser(){
  if (req.user.dm){

  }
  else if(req.user){

  }
  else{
    
  }
}

console.log('route char logged')
