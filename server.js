// 1. node config block
// environmental variables for node
require("dotenv").config();
// initialize express for node
const express = require('express');
// intialize sessions for node
const session = require('express-session');
// initialize handlebars for node
const exphbs = require('express-handlebars');
// initialize path for node
const path = require('path');
// initialize routes for node / express
const routes = require('./controllers');
//  helpers
const helpers = require('./utils/helper');

// 2. database config block
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// 3. Express (app) server config block
const PORT = process.env.PORT || 6174;
const app = express();

const sess = {
    secret: process.env.SESSIONSECRET,
    cookie: {maxAge: 24 * 60 * 60 * 1000,},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({
        db: sequelize
    })
};

// express-session and store as express.js middleware
app.use(session(sess));

// handlebars settings
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(()=>{
    app.listen(PORT, () => console.log(`👽 App is listening on port - ${PORT} ✌️`));
});
