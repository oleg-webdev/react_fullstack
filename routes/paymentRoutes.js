const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {

  app.post('/api/stripe_checkout', (req, res) => {

    /***
     * Setup Customer
     */
    stripe.customers.create({
      email: 'foo-customer@example.com'
    }).then(function(customer){
      return stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      });
    }).then(function(source) {
      /***
       * Setup Charge
       */
      return stripe.charges.create({
        amount: 1600, // $16
        currency: 'usd',
        customer: source.customer
      });

    })
      // Success case
      .then(function(charge) {

      res.send(charge);
    })
      // Error
      .catch(function(err) {
      res.send(err);

    });

  });


}