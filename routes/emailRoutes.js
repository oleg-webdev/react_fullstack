const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: keys.appEmail,
    pass: keys.appEmailPass
  }
});

module.exports = app => {

  /***
   * Contact Us Router
   */
  app.post('/form/contact-us', (req, res) => {
    console.log(req.body);
    const mailOptions = {
      from: req.body.userEmail,
      to: keys.appEmail,
      subject: 'Sending Email using Node.js',
      text: req.body.userMessage
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        req.session.flashMessage = {
          type: 'danger',
          body: 'Something wrong.'
        }
      } else {
        // Success
        console.log('Email sent: ' + info.response);
        req.session.flashMessage = {
          type: 'success',
          body: 'Thank you, we will respond to you soon!'
        }
      }

      res.redirect('/');
    });
  });

}