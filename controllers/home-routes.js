const router = require('express').Router();
const { Article } = require('../models');


// home route
router.get('/', async (req, res) => {
  try{
    const dbArticlesData = await Article.findAll({
      include: [{all: true, nested: true }]
    });
    const articles = dbArticlesData.map((article) => article.get({plain: true}));
    res.render('homepage', {
    articles,
    loggedIn: req.session.loggedIn
  });
} catch (err) {
    console.log(err);
    res.status(500).json(err)
  } 
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