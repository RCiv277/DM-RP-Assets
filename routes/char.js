var express = require('express');
var router = express.Router();
var passport = require('passport')
var charCTRL = require('../controllers/playerper')
var dmCTRL = require('../controllers/dmper')

/* GET home page. */
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile' , 'email']}
))
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/char',
    failureRedirect: '/char'
  }
))
router.get('/logout', function(req, res){
  req.logOut()
  res.redirect('/char')
})

router.get('/profile', function(req, res, next) {
  console.log(req.session)
  console.log(req.isAuthenticated())
res.json({user : {...req.user}, session: {...req.session}});
})


router.get('/', charCTRL.showAllChars)
router.get('/char', charCTRL.showAllChars)
router.get('/char/new', charCTRL.genCreateForm)
router.post('/submit', charCTRL.createChar)
router.get('/char/:id', charCTRL.showChar)
router.get('/char/:id/edit', charCTRL.editCharForm)
router.get('/dm', dmCTRL.showAllDms)
router.get('/dm/new', dmCTRL.dmForm)
router.post('/dm/yo', dmCTRL.upgradeToDm)
router.get('/dm/yo', dmCTRL.upgradeToDm)
router.get('/dm/create', dmCTRL.newDmForm)
router.post('/dmsubmit', dmCTRL.generateTheDm)
router.get('/dmedit', function(req, res){
  console.log('Hi-----------------0/')
  res.redirect('/')
})

module.exports = router;



console.log('route char logged')
