/* eslint-disable indent */
var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // update image
  app.put("/api/users/:username", function (req, res) {
    var username = req.params.username;
    db.User.update(
      {
        // eslint-disable-next-line camelcase
        image_url: req.body.image_url
      },
      {
        where: {
          username: username
        }
      }
    ).then(function (dbReturn) {
      console.log(dbReturn);
      console.log(req.body);
      res.json(dbReturn);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};