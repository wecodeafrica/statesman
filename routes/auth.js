// dependencies required for routes
const router = require('express').Router();
const passport = require('passport');
const Joi = require('joi');
const User = require('../models/user');

// validation for user sign-up data
const userSchema = Joi.object().keys({
    // name: Joi.string().required(),
    // username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    password2: Joi.any().valid(Joi.ref('password')).required()
});

// route to sign up page
router.get('/register', (req, res) => res.render('register'));

// route to login page
router.get('/login', (req, res) => res.render('login'));

// handles user sign up
router.post('/register', async (req, res, next) => {
    try {
        const {
            value,
            error
        } = Joi.validate(req.body, userSchema);

        if (error) {
            req.flash('error', 'Invalid data. Please try again!');
            return res.redirect('/register');
        }
        const user = await User.findOne({
            'email': value.email
        });

        if (user) {
            req.flash('error', 'Email already exists!');
            return res.redirect('/register');
        }

        // hash password
        const hashedPassword = await User.hashPassword(value.password);
        delete value.password2;
        value.password = hashedPassword;
        const newUser = await new User(value);
        // newUser = result.value;
        await newUser.save();
        // console.log(value);
        // req.flash('success', 'you have successfully logged in');
        res.redirect('/login');
    } catch (error) {
        next(error);
    }
});

// handles user login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

//handles user logout
router.get('/logout', (req, res) => {
    req.flash('success', 'Successfully logged out')
    req.logout();
    res.redirect('/login');
});

module.exports = router;