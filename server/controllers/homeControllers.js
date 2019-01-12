const homes = require("../helpers/homes.js");

const routeHandlers = {
  retrieveOne: (req, res) => {
    var id = req.params.id;
    homes.generateHomes(id, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
  },
  alternateRoute: (req, res) => {
    res.sendStatus(404);
  }
};

module.exports = routeHandlers;
