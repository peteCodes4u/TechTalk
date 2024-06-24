const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Article.hasMany(Comment, {
    foreignKey: 'article_id'
})

Comment.belongsTo(Article, {
    foreignKey: 'article_id'
});

module.exports = { User, Article, Comment };