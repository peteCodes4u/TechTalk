const router = require('express').Router();
const { Article, Comment, User } = require('../models');


// Get all Articles for home page
router.get('/', async (req, res) => {
  try{
    const dbArticlesData = await Article.findAll({

      include: [
        {
          model: Comment,
          attributes: ['comment', 'created_at'], 
          include: {
            model: User,
            attributes: ['email']
          }
        },
        {
          model: User,
          attributes: ['email'],
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
            'created_at'
          ],
          include: {
            model: User,
            attributes: ['email']
          },
        },
        {
          model: User,
          attributes: ['email']
        },
      ],
    });
    const article = dbArticlesData.get({ plain: true});
    const user_id = req.session.user_id;
    res.render('article', {article, user_id, loggedIn: req.session.loggedIn}
    )
  }catch(err){res.status(500).json(err)}

});

// dasboard route
router.get('/dashboard', async (req, res) => {
  if (req.session.loggedIn) {
    const user_id = req.session.user_id;

    try {
      const dbArticlesData = await Article.findAll({
        where: { user_id: user_id },
        include: [
          {
            model: User,
            attributes: ['email']
          }
        ]
      });

      const articles = dbArticlesData.map((article) => article.get({ plain: true }));
      res.render('dashboard', {
        articles,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.redirect('/login');
  }
});

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