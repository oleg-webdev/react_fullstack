const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy
const { User, getUserByEmail, getUserById, comparePassword } = require('../models/User')
const keys = require('../config/keys')

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	getUserById(id, (err, user) => {
	  done(err, user)
	})
})

// Local
passport.use(new LocalStrategy(
	function(username, password, done) {
		getUserByEmail(username, (err, user) => {
		  if(err) throw err
			if(!user) {
		  	return done(null, false, {message: 'Unknown user'})
			}

			comparePassword(password, user.password, (err, isMatch) => {
			  if(err)throw err
				if(isMatch) {
			  	return done(null, user)
				} else {
					return done(null, false, {message: 'Invalid password'})
				}
			})
		})
	}
))


// Google
passport.use(
	new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {

			User.findOne({ googleId: profile.id }).then(existingUser => {

				if (existingUser) {
					done(null, existingUser)
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user))
				}

			})
		})
)
