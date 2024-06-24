const router = require('express').Router();
const { Article, Comment } = require('../models');


// Get all Articles for home page
router.get('/', async (req, res) => {
  try{
    const dbArticlesData = await Article.findAll({

      include: [
        {
          model: Comment,
          attributes: ['comment', 'comment_date'] 
        },
      ],
    });

    const articles = dbArticlesData.map((article) => 
      article.get({plain: true}));
    res.render('homepage', {
    articles,
    loggedIn: req.session.loggedIn
  });
} catch (err) {
    console.log(err);
    res.status(500).json(err)
  } 
});

// Get one article
router.get('/article/:id', async (req, res) => {

  try{
    const dbArticlesData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'comment',
            'comment_date',
            'user_id'
          ],
        },
      ],
    });
    const article = dbArticlesData.get({ plain: true});
    res.render('article', {article, loggedIn: req.session.loggedIn})
  }catch(err){res.status(500).json(err)}

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