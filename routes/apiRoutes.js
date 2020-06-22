/* eslint-disable indent */
var db = require("../models");
const router = require("express").Router();
var passport = require("passport");
var bcrypt = require("bcrypt");

router.route("/getplayer")
  .post(function (req, res) {
    db.Player.findOne({ username: req.body.username })
      .then(dbPlayer => {
        if(dbPlayer !== null){
          truePassword = dbPlayer.checkPassword(req.body.password);
          if (truePassword === true){
            let player = {
              id: dbPlayer._id,
              username: dbPlayer.username,
              highestscore: dbPlayer.highestscore,
              numberofgames: dbPlayer.numberofgames,
              lastgamescore: dbPlayer.lastgamescore
            }
            res.json(player);
          } else {
            res.json(null);
          }
        } else {
          res.json(null);
        }
      })
  });

// Create a new player
router.route("/regplayer")
  .post(function (req, res) {
    db.Player
      .create(req.body)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  });


module.exports = router;

// module.exports = function (app) {
//   // Get all examples
//   app.get("/api/users", function (req, res) {
//     db.User.findAll({}).then(function (dbUser) {
//       res.json(dbUser);
//     });
//   });

//   // Create a new example
//   app.post("/api/users", function (req, res) {
//     db.Player.create(req.body).then(function (dbPlayer) {
//       res.json(dbPlayer);
//     });
//   });
//   // update image
//   app.put("/api/users/:username", function (req, res) {
//     var username = req.params.username;
//     db.User.update(
//       {
//         // eslint-disable-next-line camelcase
//         image_url: req.body.image_url
//       },
//       {
//         where: {
//           username: username
//         }
//       }
//     ).then(function (dbReturn) {
//       console.log(dbReturn);
//       console.log(req.body);
//       res.json(dbReturn);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/users/:id", function (req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function (
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });

//   //post route for login

//   // when login is successful, retrieve user info
//   router.get("/login/success", (req, res) => {
//     console.log("LOG IN SUCCESS??");
//     console.log(req.user);
//     if (req.user) {
//       // console.log("successFulll", req.user);
//       res.json({
//         success: true,
//         message: "user has successfully authenticated",
//         user: req.user,
//         cookies: req.cookies
//       });
//     } else {
//       res.json({
//         success: false,
//         message: "no user has authenticated",
//         user: null,
//         cookies: req.cookies
//       });
//     }
//   });
//   // when login failed, send failed msg
//   app.get("/login/failed", (req, res) => {
//     console.log("failed login **************");
//     res.json({
//       success: false,
//       message: "user failed to authenticate."
//     });
//   });
//   app.post("/login", (req, res, next) => {
//     console.log("************login from redirect*********");
//     console.log(req.user);
//     console.log(req.body);
//     passport.authenticate("local", {
//       successRedirect: "/login/success",
//       failureRedirect: "/login/failed"
//       // failureFlash: true
//     })(req, res, next);
//   });
//   //post route for register
//   // app.post('/api/register')
// };