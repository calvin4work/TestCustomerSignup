'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/customerController');

  // todoList Routes
  app.route('/customer')
    .post(todoList.create_a_customer);
};
