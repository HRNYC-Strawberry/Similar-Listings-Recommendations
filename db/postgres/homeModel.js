var pg = require('pg');
var conString = 'postgres://postgres:asdf;lkj@localhost:5432/streetbreezy';

var client = new pg.Client(conString);
client.connect();



module.exports = client;


