// dependencies for the project
const express = require('express');
const app = express();
require('dotenv').config();
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
var logger = require('morgan');
require('./config/passport');

// requiring mongoose db
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// configure mongoose
mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true
    })
    // .then(() => console.log('You are connected!'))
    // .catch(err => {
    //     console.log('Error ' + err);
    //     process.exit(1);
    // });

app.use(logger('dev'));
app.use(cookieParser());
// set views template to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// configure express to revive user input
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// required for passport
app.use(session({
    secret: 'FUCK LOVE!!!',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// make the user available to every template and the flash messages
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// middleware for requiring routes
app.use(require('./routes/auth'));
// app.use(require('./routes/misc'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', ( req, res) => {
    res.render('login')
});

app.get( '/forms', ( req, res) => {
    res.render('forms')
})
app.get('/stateman', ( req, res) => {
    res.render('stateman')
})

app.get( '/footer', ( req, res ) => {
    res.render( 'footer' )
});

app.get( '/search', ( req,res ) => {
    res.render('search')
});
app.get('/landing', ( req, res ) => {
    res.render( 'landing')
})

app.listen(process.env.PORT, () => console.log(`server is listening`));
