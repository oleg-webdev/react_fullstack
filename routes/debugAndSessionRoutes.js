module.exports = app => {

	// debug user
	app.get('/api/current_user', (req, res) => {
		// console.log(req.session.cart)

		res.send(req.user)
	})

	// debug cookie
	app.get('/api/debug_cookie', (req, res) => {
		req.session.cart = {changed: 'yes!'}


		res.send('/...')
	})
	app.get('/api/debug-response', (req, res) => {
		// req.session.cart = {changed: 'yes!'}


		res.send(req.session.cart)
	});


  /***
   * Session
   */
  app.post('/api/fetch_session', (req, res) => {
    res.send(req.session);
  });

  app.post('/api/destroy_flashes', (req, res) => {
    req.session.flashMessage = false
    res.send('done');
  });


}