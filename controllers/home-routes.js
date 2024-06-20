const router = require('express').Router();

// home route
router.get('/', (req, res) => {
res.render('homepage');
});
// dasboard route

// signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;