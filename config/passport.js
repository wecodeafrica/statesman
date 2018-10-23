const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user)
    } catch (error) {
        done(error, null)
    }
});

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false
}, async (email, password, done) => {
    try {
        // check if email exists
        const user = await User.findOne({
            'email': email
        });
        if (!user) {
            return done(null, false, {
                message: 'unknown user'
            });
        }
        // check if password is the same(user password input and db password)
        const isValid = await User.comparePassword(password, user.password);
        if (!isValid) {
            return done(null, false, {
                message: 'unknown password'
            });
        }
        return done(null, user);
    } catch (error) {
        return done(error, false)
    }
}));