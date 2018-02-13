const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const client = new Client({
  user: 'cxkztysabnllfi',
  host: 'ec2-50-16-231-2.compute-1.amazonaws.com',
  database: 'd7kouk9gs05vad',
  password: '117abd374371be13841690cc497114b1e16a6b8ba585a70b4724e171c0d23a44',
  port: 5432,
  ssl: true
})

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