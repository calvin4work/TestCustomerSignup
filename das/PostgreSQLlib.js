const { Pool, Client } = require('pg');
const config = {
  host: 'ec2-50-16-231-2.compute-1.amazonaws.com',
  database: 'd7kouk9gs05vad',
  user: 'cxkztysabnllfi',
  password: '117abd374371be13841690cc497114b1e16a6b8ba585a70b4724e171c0d23a44',
  port: 5432,
  ssl: true
};

class PostgreSQL {
	insert(str){
		try{
			const client = new Client(config);
			client.connect()
		    client.query(str, (err, res) => {
		    client.end()
		    })
		}catch(err)
		{
			console.log(err);
			client.end();
		}
	};

}

exports.default = PostgreSQL;