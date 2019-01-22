const faker = require("faker");
const Home = require("./homeModel.js");
const fs = require("file-system");

var batch = [];
var start = 1;
var end = 10000;
var insertAllHomes = () => {

  Home.insertMany(batch, {ordered: false}, (err, data) => {
    if(err) {
      console.log(err)
    } else if (start <= end) {
      start++;
      batch = [];
      makeBatch();
      
    } else {
      console.timeEnd('dbinsert')
    }
  })
};

makeBatch = () => {
  var cities = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"];
  for (var i = 1; i <= 1000; i++) {
    var home = generateHomeAttributes({}, (i), cities);
   
    
    batch.push(home);
    
  }
  insertAllHomes();
};


var generateHomeAttributes = (home, id, cities) => {
  if (id < 25) {
    return decorateLowTier(home, id, cities);
  } else if (id < 50) {
    return decorateMidTier(home, id, cities);
  } else if (id < 75) {
    return decorateHighTier(home, id, cities);
  } else {
    return decorateBallerTier(home, id, cities);
  }
};

var decorateLowTier = (home, id, cities) => {
  home.address = faker.address.streetAddress();
  home.city = cities[getRandomNumber(0, 4)];
  home.price = getRandomNumber(250000, 500000);
  home.bedNum = 1;
  home.bathNum = 1;
  home.sqFootage = getRandomNumber(350, 600);
  home.imageUrl = `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`;
  return home;
};

var decorateMidTier = (home, id, cities) => {
  home.address = faker.address.streetAddress();
  home.city = cities[getRandomNumber(0, 4)];
  home.price = getRandomNumber(500001, 1000000);
  home.bedNum = getRandomNumber(1, 2);
  home.bathNum = getRandomNumber(1, home.bedNum);
  home.sqFootage = getRandomNumber(450, 900);
  home.imageUrl = `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`;
  return home;
};

var decorateHighTier = (home, id, cities) => {
  home.address = faker.address.streetAddress();
  home.city = cities[getRandomNumber(0, 4)];
  home.price = getRandomNumber(1000001, 3000000);
  home.bedNum = getRandomNumber(2, 4);
  home.bathNum = getRandomNumber(2, home.bedNum === 2 ? 2 : home.bedNum - 1);
  home.sqFootage = getRandomNumber(1000, 2500);
  home.imageUrl = `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`;
  return home;
};

var decorateBallerTier = (home, id, cities) => {
  home.address = faker.address.streetAddress();
  home.city = cities[getRandomNumber(0, 1)];
  home.price = getRandomNumber(3000001, 20000000);
  home.bedNum = getRandomNumber(3, 7);
  home.bathNum = getRandomNumber(2, home.bedNum < 5 ? 3 : home.bedNum - 2);
  home.sqFootage = getRandomNumber(2000, 6000);
  home.imageUrl = `https://s3.amazonaws.com/hrnyc19apartmentimages/Images/${id}`;
  return home;
};

var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
console.time('dbinsert')
insertAllHomes();


module.exports = insertAllHomes;
