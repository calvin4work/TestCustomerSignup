
const { Pool, Client } = require('pg')

const client = new Client({
  user: 'cxkztysabnllfi',
  host: 'ec2-50-16-231-2.compute-1.amazonaws.com',
  database: 'd7kouk9gs05vad',
  password: '117abd374371be13841690cc497114b1e16a6b8ba585a70b4724e171c0d23a44',
  port: 5432,
  ssl: true
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(res.rows[0])
  client.end()
})