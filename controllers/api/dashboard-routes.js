const router = require('express').Router();
const { Article } = require('../../models');

// get all articles for the logged in user by their user_id
router.get('/dashboard/:user_id', async (req, res) => {
    try {
        const dbUserArticleData = await Article.findAll({
            where: {
                user_id: req.body.user_id,
            }
        });
        const articles = dbUserArticleData.map((article) => article.get({ plain: true}));

        res.render('dashboard', {articles, loggedIn: req.session.loggedIn })
    } catch(err){res.status(422).json({error: err.message});}
});

module.exports = router;