const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const keys = require('./config/keys')

// Services
require('./services/passport')

mongoose.connect(keys.mongoURI).then(() => {
	console.log(`*** Database Connected ***`)
}, err => {
	console.log('Unable connect to database: ', err);
})

const app = express()

// app.set('view engine', 'hbs')
// app.engine('html', require('hbs').__express)
// app.set('views',  `./views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

// app.use(
// 	cookieSession({
// 		name: 'authSession',
// 		maxAge: 300 * 24 * 60 * 60 * 1000, // month
// 		keys: [ keys.cookieKey ]
// 	})
// )
app.use(
	cookieSession({
		name: 'authSession',
		maxAge: 300 * 24 * 60 * 60 * 1000, // month
		keys: [ keys.cookieKey ]
	})
)

app.use(passport.initialize())
app.use(passport.session())

// Simple middleware
app.use((req, res, next) => {

	next()
})

// Pages
require('./routes/pagesRoutes')(app)
// Auth
require('./routes/authRoutes')(app)
// Debug
require('./routes/debugRoutes')(app)


const port = process.env.PORT || 8080

app.listen(port, () => {
	// http://localhost:8080/
	// https://quiet-basin-37027.herokuapp.com/
	console.log(`Starting: http://localhost:${port}`)
})
