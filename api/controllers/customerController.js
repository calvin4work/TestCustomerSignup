'use strict';


exports.create_a_customer = function(req, res) {
	console.log('create_a_customer');	
  	//console.log(req.body);

  	var data = req.body;
  	


  	res.send(JSON.stringify(data));


  // var new_task = new Task(req.body);
  // new_task.save(function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
};

