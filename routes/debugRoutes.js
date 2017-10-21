module.exports = app => {

	// debug user
	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	})

	// debug cookie
	app.get('/api/debug_cookie', (req, res) => {
		req.session.cart = {}

		console.log(req.session.cart)

		res.send('/...')
	})


}