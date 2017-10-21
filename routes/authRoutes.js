const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const {createUser} = require('../models/User')

module.exports = app => {
	// Google auth routes
	app.get(
		'/auth/google',
		passport.authenticate('google',
			{
				scope: [ 'profile', 'email' ]
			}
		)
	)

	app.get('/auth/google/callback', passport.authenticate('google'))

	// Logout
	app.get('/auth/logout', (req, res) => {
		req.logout()
		res.send(req.user)
	})

	// Register
	app.post('/auth/register', (req, res) => {
		let email = req.body.email,
			password = req.body.password

		//@TODO Validate inputs and check if user exists
		req.checkBody('email', 'Email is required').notEmpty()

		let errors = req.validationErrors()
		if(errors) {
			console.log('Errors')
		} else {
			const newUser = new User({email, password})
			createUser(newUser, (err, user) => {
				if(err) throw err

				console.log(user)
			})
		}


		//@TODO return response
	})

	// Login
	app.post('/auth/login',
		passport.authenticate('local', {
			successRedirect: '/?msg=success',
			failureRedirect: '/?msg=fail',
		}),
		function(req, res) {
			res.redirect('/');
		});


}
