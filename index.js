const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const session = require('express-session');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const keys = require('./config/keys');

// git push heroku master
// git push origin master
// Services
require('./services/passport');

mongoose.connect(keys.mongoURI).then(() => {
  console.log(`*** Database Connected ***`)
}, err => {
  console.log('Unable connect to database: ', err);
});

const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('hbs').__express);
// app.set('view engine', 'hbs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// cookie-session
app.use(
  cookieSession({
    name: 'authSession',
    maxAge: 300 * 24 * 60 * 60 * 1000, // month
    keys: [keys.cookieKey]
  })
);

// express-session
// app.use(session({
// 	secret: keys.cookieKey,
// 	saveUninitialized: true,
// 	resave: false,
// 	// cookie: { secure: true }
// }))

app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    let namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root

    while (namespace.length) {
      formParam += `[${namespace.shift()}]`
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// Simple middleware
// app.use((req, res, next) => {
//
//   next()
// });

// Pages
// require('./routes/pagesRoutes')(app);
// Auth
require('./routes/authRoutes')(app);
// Emails
require('./routes/formRoutes')(app);
// Debug
require('./routes/debugAndSessionRoutes')(app);
// Payments
require('./routes/paymentRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  // http://localhost:8080/
  // https://quiet-basin-37027.herokuapp.com/
  console.log(`Starting: http://localhost:${port}`);
});
