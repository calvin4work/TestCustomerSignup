'use strict';
module.exports = function(app) {
  var controller = require('../controllers/appController');

  app.route('/customer')
    .post(controller.create_a_customer);
  app.route('/transaction')
    .post(controller.create_a_transaction);
};
