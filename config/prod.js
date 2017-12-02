// prod.js
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

	mongoURI: process.env.MONGO_URI,

	cookieKey: process.env.COOKIE_KEY,

  appEmail: process.env.APP_EMAIL_KEY,
  appEmailPass: process.env.APP_EMAIL_PASSWORD,
}
