require("dotenv").config();
const mongoose = require('mongoose');
const flash = require('connect-flash');

const express = require('express');
const app = express();
const port = 8000;

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startergy');

const MongoStore = require('connect-mongo')



const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'));


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'MovieApp',
    secret: process.env.SESSION_SECRET || 'hacktivespace',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: process.env.MONGODB_URL,
            autoRemove: 'disabled'
        }, function (err) {
            console.log(err || "Connection is fine");
        }
    )
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_messages = req.flash('success');
    res.locals.error_messages = req.flash('error');
    res.locals.info_messages = req.flash('info');
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use((req, res, next) => {
    res.locals.req = req;
    next();
});

app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    console.log("Successfully running on port", port);
})