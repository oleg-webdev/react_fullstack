const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
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
  app.post('/form/contact-us', [

    check('userMessage')
      .trim()
      .isLength({ min: 5 }).withMessage('Your message is too short'),

    check('userEmail')
      .isEmail().withMessage('must be an email')
      .trim()
      .normalizeEmail(),

  ],(req, res) => {

    const errors = validationResult(req);
    const allErrors = req.validationErrors();
    if (!errors.isEmpty()) {
      req.session.flashMessage = [];

      allErrors.map(function (error) {
        req.session.flashMessage.push({
          key: error.param,
          type: 'danger',
          body: error.msg
        })
      });

      return res.redirect('/contact-us');
    }

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

      res.redirect('/contact-us');
    });
  });

}