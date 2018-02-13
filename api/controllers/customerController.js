'use strict';

const { Pool, Client } = require('pg');
var uuidv4 = require('uuid/v4');

const first_name = 'Bo';
const last_name = 'Hu';
const client = new Client({
  user: 'cxkztysabnllfi',
  host: 'ec2-50-16-231-2.compute-1.amazonaws.com',
  database: 'd7kouk9gs05vad',
  password: '117abd374371be13841690cc497114b1e16a6b8ba585a70b4724e171c0d23a44',
  port: 5432,
  ssl: true
})

exports.create_a_customer = function(req, res) {
	console.log('create_a_customer');	

  try{

    var receiptId = uuidv4(); // need to creat new column

    var data = req.body;
    var id=parseInt(data.id);
    var first_name=data.first_name;
    var last_name=data.last_name;
    var first_store=data.first_store;
    var email=data.email;
    var email_optin=parseInt(data.email_optin);
    var email_valid=parseInt(data.email_valid);
    var gender=parseInt(data.gender);
    var street=data.street;
    var address_2=data.address_2;
    var country=data.country;
    var zip=parseInt(data.zip);
    var city=data.city;
    var birthday=data.birthday;
    var age=data.age;
    var phone_no=data.phone_no;
    var mob=data.mob;
    var mob_optin=parseInt(data.mob_optin);
    var acc_country=data.acc_country;
    var value_tier=data.value_tier;
    var platinum=data.platinum;
    var language=data.language;
    var create_date=data.create_date;
    var club=data.club;
    var reg_type=data.reg_type;
    var identity_no=data.identity_no;
    var data_source=data.data_source;


    client.connect()


    client.query(`insert into customer(
                  id,
                  first_name,
                  last_name,
                  first_store,
                  email,
                  email_optin,
                  email_valid,
                  gender,
                  street,
                  address_2,
                  country,
                  zip,
                  city,
                  birthday,
                  age,
                  phone_no,
                  mob,
                  mob_optin,
                  acc_country,
                  value_tier,
                  platinum,
                  language,
                  create_date,
                  club,
                  reg_type,
                  identity_no,
                  data_source,
                  receipt_id) 
      values(
        '${id}',
        '${first_name}',
        '${last_name}',
        '${first_store}',
        '${email}',
        '${email_optin}',
        '${email_valid}',
        '${gender}',
        '${street}',
        '${address_2}',
        '${country}',
        '${zip}',
        '${city}',
        '${birthday}',
        '${age}',
        '${phone_no}',
        '${mob}',
        '${mob_optin}',
        '${acc_country}',
        '${value_tier}',
        '${platinum}',
        '${language}',
        '${create_date}',
        '${club}',
        '${reg_type}',
        '${identity_no}',
        '${data_source}',
        '${receiptId}'
      )
      `, (err, res) => {

      client.end()
    })


      var result = {};
      result.status = 'success';
      result.receiptId = receiptId;

      res.send(JSON.stringify(result));

  }catch(er)
  {

    //console.log(res.rows[0])
      res.send(JSON.stringify(er));
      client.end()

  }

    
  	
    

  	


  // var new_task = new Task(req.body);
  // new_task.save(function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
};

