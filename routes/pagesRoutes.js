module.exports = app => {


	app.get('/', (req, res) => {
		// res.send('Goto: http://localhost:5000/auth/google')
		res.render('./index.hbs', {

		})
	})


}