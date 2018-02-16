'use strict';

const uuidv4 = require('uuid/v4');
const postgresql = require('../../das/PostgreSQLlib');
const postgresql_client = new postgresql.default();

exports.create_a_customer = function(req, res) {
	console.log('create_a_customer');	

  try{

    var receiptId = uuidv4(); // need to creat new GUID

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

    postgresql_client.insert(`insert into customer(id,first_name,last_name,first_store,email, 
      email_optin,  email_valid,  gender, street, address_2,  
      country,  zip,  city, birthday, age,  phone_no, mob,  
      mob_optin,  acc_country,  value_tier, platinum, language,
       create_date,  club, reg_type, identity_no,  data_source,  receipt_id)   
       values( '${id}',  '${first_name}',  '${last_name}', '${first_store}', '${email}', 
       '${email_optin}', '${email_valid}', '${gender}',  '${street}',  
       '${address_2}', '${country}', '${zip}', '${city}',  '${birthday}',  
       '${age}', '${phone_no}',  '${mob}', '${mob_optin}', '${acc_country}', 
       '${value_tier}',  '${platinum}',  '${language}',  '${create_date}', 
       '${club}',  '${reg_type}',  '${identity_no}', '${data_source}', 
       '${receiptId}'  ) `);

      var result = {};
      result.status = 'success';
      result.receiptId = receiptId;

      res.send(JSON.stringify(result));

  }catch(er)
  {

    //console.log(res.rows[0])
      res.send(JSON.stringify(er));

  }
};

exports.create_a_transaction = function(req, res) {
  console.log('create_a_transaction');  

  try{

    var receiptId = uuidv4(); // need to creat new GUID
    var data = req.body;

    var cardnumber=data.cardnumber;
    var companycode=data.companycode;
    var storeid=data.storeid;
    var transactiondate=data.transactiondate;
    var station=data.station;
    var transactionnumber=data.transactionnumber;
    var seasonyear=parseInt(data.seasonyear);
    var season=data.email_valid;
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
    var campaigncode=data.campaigncode;
    var updated=parseInt(data.updated);

    postgresql_client.insert(`insert into transaction(cardnumber , companycode , storeid , transactiondate ,
 station , transactionnumber , seasonyear , season ,
 division , articlenumber , color , size , description ,
 productclass , productclassdesc , quantity , price ,
 costprice , fashionlevel , pricelevel , orgsellprice ,
 netsalesbase , netsaleslocal , coupon , campaigncode , updated) values('${cardnumber}','${companycode}','${storeid}','${transactiondate}',
'${station}','${transactionnumber}','${seasonyear}','${season}',
'${division}','${articlenumber}','${color}','${size}','${description}',
'${productclass}','${productclassdesc}','${quantity}','${price}',
'${costprice}','${fashionlevel}','${pricelevel}','${orgsellprice}',
'${netsalesbase}','${netsaleslocal}','${coupon}','${campaigncode}','${updated}')`);

      var result = {};
      result.status = 'success';
      result.receiptId = receiptId;

      res.send(JSON.stringify(result));

  }catch(er)
  {
      res.send(JSON.stringify(er));

  }

};


