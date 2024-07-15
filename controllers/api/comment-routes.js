const router = require('express').Router();
const { Comment } = require('../../models');




router.post('/', async (req, res) => {
    const user_id = req.session.user_id;
    try {
        await Comment.create({
            user_id: user_id,
            article_id: req.body.article_id,
            comment: req.body.comment,
        });
        res.status(200).json({ message: `comment has been successfully added` })
    } catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed due to the following error - " + err }) }

});

module.exports = router;
