var pg = require('pg');
var URI = "ec2-52-15-160-78.us-east-2.compute.amazonaws.com" || localhost;
var password = process.env.DATABASE_PASSWORD || '';

var client = new pg.Pool({
  host: 'ec2-52-15-160-78.us-east-2.compute.amazonaws.com',
  user: 'postgres',
  password: "mysecretpassword",
  database: 'streetbreezy',
  port: 80
})
// var client = new pg.Client(conString);
client.connect();





module.exports = client;


