var client = require('./homeModel.js')
let query = 'CREATE TABLE homes(' +
 'city VARCHAR(40), address VARCHAR(40) ,' +
 'price INTEGER, bedNum INTEGER, bathNum INTEGER,' + 
 'sqFootage INTEGER, imageURL VARCHAR(300) );'
 
 client.query(query, (err, res)=> {
   if(err) {
     console.error(err)
   } else {
    let seed = `COPY homes FROM 'file.csv' CSV HEADER`;
    client.query(seed, (er, resp) => {
      console.log(er, resp);
    });
   }
 })


