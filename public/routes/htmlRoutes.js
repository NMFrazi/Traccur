var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("homepage");
    // db.User.findAll({}).then(function(dbUser) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     users: dbUser
    //   });
    // });
  });

  // Load user page and pass in a user by username
  app.get("/users/:username", function (req, res) {
    db.User.findOne({ where: { username: req.params.username } }).then(function (
      dbUser
    ) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  app.get("/userid/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  //profile update image
  app.get("/profile/:username", function (req, res) {
    db.User.findOne({
      where: { username: req.params.username }
    }).then(function (dbUser) {
      res.render("profile", {
        userImage: dbUser
      });
    });
  });

  app.get("/profile/:username", function (req, res) {
    db.User.findOne({
      where: { username: req.params.username }
    }).then(function (dbUser) {
      res.render("profile", {
        username: dbUser.username
      });
    });
  });

  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });
  app.get("/homepage", function (req, res) {
    res.render("homepage", { title: "homepage", active: { Register: true } });
  });
  app.get("/profile", function (req, res) {
    res.render("profile", { title: "profile", active: { Register: true } });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};