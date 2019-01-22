const client = require("../../db/postgres/homeModel.js");
const pg = require('pg')
const homeHelpers = require("./homesHelpers.js");


const homes = {
  generateHomes: (id, callback) => {
    var similarListings = homeHelpers.chooseSubsetIds(id);
    var imageUrls = homes.createUrls(similarListings);
    return homes.getHomes(id, callback);
  },

  createUrls: listings => {
    return listings.map(
      id => `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`
    );
  },

  getHomes: (id, callback) => {
    
    client.query(
      `select * from homes where home_id >= ${id} AND home_id < (${id} + 9);`,
      (err, res) => {
        console.log("res", res.rows)
        if (err) {
          callback(err);
        } else {
          callback(null, res.rows);
        }
      }
    );
  }
};

module.exports = homes;
