'use strict';

//const { Pool, Client } = require('pg');
var uuidv4 = require('uuid/v4');

/*const client = new Client({
  user: 'cxkztysabnllfi',
  host: 'ec2-50-16-231-2.compute-1.amazonaws.com',
  database: 'd7kouk9gs05vad',
  password: '117abd374371be13841690cc497114b1e16a6b8ba585a70b4724e171c0d23a44',
  port: 5432,
  ssl: true
})*/

exports.create_a_transaction = function(req, res) {
	console.log('create_a_transaction');	

  try{

    var receiptId = uuidv4(); // need to creat new GUID

    var data = req.body;
    var cardnumber =bigInt(data.cardnumber);
    var companycode=data.companycode;
    var storeid=data.storeid;
    var transactiondate=data.transactiondate;
    var station=data.station;
    var transactionnumber=bigInt(data.transactionnumber);
    var seasonyear=parseInt(data.seasonyear);
    var season=data.season;
    var division=data.division;
    var articlenumber=data.articlenumber;
    var color=data.color;
    var size=data.size;
    var description=data.description;
    var productclass=data.productclass;
    var productclassdesc=data.productclassdesc;
    var quantity=parseInt(data.quantity);
    var price=parseFloat(data.price);
    var costprice=parseFloat(data.costprice);
    var fashionlevel=data.fashionlevel;
    var pricelevel=data.pricelevel;
    var orgsellprice=parseFloat(data.orgsellprice);
    var netsalesbase=data.netsalesbase;
    var netsaleslocal=parseFloat(data.netsaleslocal);
    var coupon=data.coupon;
    var updated=data.updated;


/*    client.connect()


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
    })*/


      var result = {};
      result.status = 'success';
      result.receiptId = receiptId;

      res.send(JSON.stringify(result));

  }catch(er)
  {

    //console.log(res.rows[0])
      res.send(JSON.stringify(er));
     // client.end()

  }

    
  	
    

  	


  // var new_task = new Task(req.body);
  // new_task.save(function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
};

