const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

// Models
require('./models/User')

require('./services/passport')

mongoose.connect(keys.mongoURI).then(() => {
	console.log(`*** Database Connected ***`)
}, err => {
	console.log('Unable connect to database: ', err);
})

const app = express()

app.use(
	cookieSession({
		maxAge: 300 * 24 * 60 * 60 * 1000, // month
		keys: [ keys.cookieKey ]
	})
)

app.use(passport.initialize())
app.use(passport.session())

// Pages
require('./routes/pagesRoutes')(app)
// Auth
require('./routes/authRoutes')(app)

const port = process.env.PORT || 5000

app.listen(port, () => {
	// http://localhost:5000/
	// https://quiet-basin-37027.herokuapp.com/
	console.log(`Starting: http://localhost:${port}`)
})
