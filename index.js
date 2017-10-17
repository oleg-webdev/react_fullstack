const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

passport.use(
	new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(`token: ${accessToken}`)
			console.log(`refresh token: ${refreshToken}`)
			console.log(`profile: ${JSON.stringify(profile, undefined, 2)}`)

			// done()
		})
)


app.get('/', (req, res) => {
	res.send('Goto: http://localhost:5000/auth/google')
})

// Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: [ 'profile', 'email' ] }))
app.get('/auth/google/callback', passport.authenticate('google'))

const port = process.env.PORT || 5000
app.listen(port, () => {
	// http://localhost:5000/
	// https://quiet-basin-37027.herokuapp.com/
	console.log(`Starting: http://localhost:${port}`)
})
