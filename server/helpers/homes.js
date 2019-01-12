const Home = require("../../db/homeModel.js");
const homeHelpers = require("./homesHelpers.js");

const homes = {
  generateHomes: (id, callback) => {
    var similarListings = homeHelpers.chooseSubsetIds(id);
    var imageUrls = homes.createUrls(similarListings);
    return homes.getHomes(imageUrls, callback);
  },

  createUrls: listings => {
    return listings.map(
      id => `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`
    );
  },

  getHomes: (imageUrls, callback) => {
    Home.find({ imageUrl: { $in: imageUrls } }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};

module.exports = homes;
