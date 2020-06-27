const db = require("../models");
const router = require("express").Router();
// const passport = require("passport");
const passport = require("../config/passport-config");

// Login Handle
// router.post("/login", (req, res, next) => {
//   console.log("***********login from redirect********");
//   console.log(req.user);
//   console.log(req.body);
//   passport.authenticate("local", {
//     successRedirect: "/auth/login/success",
//     failureRedirect: "/auth/login/failed"
//     // failureFlash: true
//   })(req, res, next);
// });
// when login failed, send failed msg

router.route("/getplayer")
     .post(
          passport.authenticate("local", {
               successRedirect: "/api/login/success",
               failureRedirect: "/api/login/failed"
               // failureFlash: true
          })
     );


router.route("/login/failed")
     .get(function (req, res) {
          console.log("failed login **************");
          res.json({
               success: false,
               message: "user failed to authenticate."
          });
     })

router.route("/login/success")
     .get(function (req, res) {
          console.log("LOG IN SUCCESS??");
          console.log(req.user._id);
          if (req.user) {
               // console.log("successFulll", req.user);
               res.json({
                    success: true,
                    message: "user has successfully authenticated",
                    userID: req.user._id,
                    cookies: req.cookies
               });
          } else {
               res.json({
                    success: false,
                    message: "no user has authenticated",
                    user: null,
                    cookies: req.cookies
               });
          }
     })

router.route("/regplayer")
     .post(function (req, res) {
          db.Player
               .create(req.body)
               .then(dbPlayer => res.json(dbPlayer))
               .catch(err => {
                    console.log(err);
                    res.status(422).json(err)
               });
     })

// Create a new player
// router.route("/regplayer")
//   .post(function (req, res) {
//     const {
//       username, password
//     } = req.body
//     const newPlayer = new Player({
//       username,
//       password
//     });
//     console.log("anything")
//     console.log(newPlayer)
//     console.log(username, password)
//     bcrypt.genSalt(10, (err, salt) =>
//       bcrypt.hash(newPlayer.password, salt, (err, hash) => {
//         if (err) throw err;
//         // set password to hashed
//         newPlayer.password = hash;
//         // save user
//         newPlayer
//           .save()
//           .then(user => {
//             req.logIn(user, err => {
//               if (!err) {
//                 const results = {
//                   success: true,
//                   message: "user has successfully authenticated",
//                   user: user,
//                   email: req.user.email,
//                   cookies: req.cookies
//                 };
//                 res.json(results);
//               } else {
//                 res.json(err);
//               }
//             });
//             // res.redirect("/auth/login");
//             // res.redirect(CLIENT_HOME_PAGE_URL);
//           })
//           .catch(err => console.log(err));
//       })
//     );
// db.Player
//   .create(req.body)
//   .then(dbPlayer => res.json(dbPlayer))
//   .catch(err => {
//     console.log(err);
//     res.status(422).json(err)
//   });
// });

module.exports = router;