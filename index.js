const express = require('express')
require('./services/passport')

const app = express()

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
