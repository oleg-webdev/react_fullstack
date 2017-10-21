module.exports = app => {

	// debug user
	app.get('/api/current_user', (req, res) => {
		// console.log(req.session.cart)

		res.send(req.user)
	})

	// debug cookie
	app.get('/api/debug_cookie', (req, res) => {
		// req.session.cart = {changed: 'yes!'}


		res.send('/...')
	})


}