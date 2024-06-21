const router = require('express').Router();
const { Article } = require('../../models');

router.get('/', async(req, res) => {
try{
    const articleData = await Article.findAll(
        {include: [{all: true, nested: true }]}
    );
    res.status(200).json((articleData));
}catch(err){res.status(500).json(err)}
});

module.exports = router;