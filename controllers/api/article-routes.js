const router = require('express').Router();
const { Article } = require('../../models');

// get all articles
router.get('/', async (req, res) => {
    try {
        const articleData = await Article.findAll(
            { include: [{ all: true, nested: true }] }
        );
        res.status(200).json((articleData));
    } catch (err) { res.status(500).json(err) }
});

// get articles for dashboard by user_id
router.get('/:user_id', async (req, res) => {
    try {
        const dbArticlesData = await Article.findAll({
            where: { user_id: req.params.user_id }
        });
        res.status(200).json(dbArticlesData);
    } catch (err) { res.status(422).json(err) }
});

module.exports = router;