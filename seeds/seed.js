require("dotenv").config({
    path: '../.env'
  })
  const sequelize = require('../config/connection');
  const { User, Article, Comment } = require('../models');
  
  const userData = require('./userData.json');
  const articleData = require('./articleData.json');
  const commentData = require('./commentData.json');
  
  const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Article.bulkCreate(articleData, {
        returning: true,
    });

    await Comment.bulkCreate(commentData, {
        returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  