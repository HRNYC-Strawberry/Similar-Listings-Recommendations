var pg = require('pg');
// var URI = "ec2-52-15-160-78.us-east-2.compute.amazonaws.com" || localhost;
// var password = process.env.DATABASE_PASSWORD || 'asdf;lkj';

var client = new pg.Pool({
  host: "localhost",
  user: 'postgres',
  password: "asdf;lkj",
  database: 'streetbreezy',
  port: 5432
})
// var client = new pg.Client(conString);
client.connect();

// let query = 'drop table if exists homes; CREATE TABLE homes(' +
//  'home_id integer, city VARCHAR(40), address VARCHAR(40) ,' +
//  'price INTEGER, bedNum INTEGER, bathNum INTEGER,' + 
//  'sqFootage INTEGER, imageURL VARCHAR(300) );'
 
//  client.query(query, (err, res)=> {
//    if(err) {
//      console.error(err)
//    } else {
//     let seed = `COPY homes (home_id, city, address, price, bedNum, bathNum, sqFootage, imageURL) FROM '/Library/PostgreSQL/11/data/file.csv' CSV HEADER;`;
//     client.query(seed, (err, resp) => {
//       if(err) {
//         console.error(err)
//       }
//       // console.timeEnd('dbinsert')
//       // fs.unlink('/Users/hannapark/Documents/hrnyc19/Similar-Listings-Recommendations/db/postgres/file.csv',(err) => {
//         // if(err) {
//         //   console.error(err)
//         // }
//       // })
//     });
//    }
//  })





module.exports = client;


