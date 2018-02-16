'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/transactionController');

  // todoList Routes
  app.route('/transaction')
    .post(todoList.create_a_transaction);
};
