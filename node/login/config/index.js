'use strict';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').OAuthStrategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./key');
const { user } = require('../models');

passport.use(new GoogleStrategy({
                callbackURL: 'http://localhost:3100/auth/google/login',
                clientID: keys.google.clientID,
                clientSecret: keys.google.clientSecret
            },
            function(accessToken, refreshToken, profile, done) {
                user.findOrCreate({ googleId: profile.id },(err, user) => {
                    if (err) { return done(err); }
                    done(null, user);
                })
            }
        ));

        passport.use(new FacebookStrategy({
                clientID: keys.facebook.clientID,
                clientSecret: keys.facebook.clientSecret,
                callbackURL: 'http://localhost:3100/auth/fb/callback',
                profileFields: ['id', 'displayName', 'gender', 'email']
            },
            function(accessToken, refreshToken, profile, done) {
                user.findOrCreate({ facebookId: profile.id },(err, user) => {
                    if (err) { return done(err); }
                    done(null, user);
                })
            }
        ));