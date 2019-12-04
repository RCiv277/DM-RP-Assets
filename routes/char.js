var express = require('express');
var router = express.Router();
var charCTRL = require('../controllers/playerper')

/* GET home page. */
router.get('/', charCTRL.showAllChars)
router.get('/char', charCTRL.showAllChars)
router.get('/char/new', charCTRL.genCreateForm)
router.post('/submit', charCTRL.createChar)
router.get('/char/:id', charCTRL.showChar)

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
