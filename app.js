const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/customerRoutes'); //importing route
routes(app); //register the route

// app.get('/', (req, res) => {
// 	res.send('Hello World!')
// });
 
 
app.listen(port, () => console.log(`Customer API listening on port ${port}`))

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);
// // set interval
// setInterval(function sendEmail() {
// 	var dt = new Date();
// 	var ms = dt.getMilliseconds();
// 	var ts = Math.floor(dt / 1000);
//    console.log("ping:" + ts + " | " + dt + " " + ms);
// }, 1300);