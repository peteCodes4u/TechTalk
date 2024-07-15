const router = require('express').Router();

const userRoutes = require('./user-routes');
const articleRoutes = require('./article-routes');
const commentRoutes = require('./comment-routes');

// handle user session / session time-out
const checkSession = (req, res, next) => {
    if (req.session) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Middleware to check session
router.use(checkSession);


router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/comments', commentRoutes);


module.exports = router;