const db = require("../models");
const router = require("express").Router();
// const passport = require("passport");
const passport = require("../config/passport-config");

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

router.route("/getuser")
     .get(function (req, res) {
          console.log("GET USER ROUTE RETURNS: "  + req.user);
          if(req.user === undefined){
               res.json({
                    isLoggedIn: false
               });
          }
          else{
               res.json({
                    isLoggedIn: true
               });
          }
     })

router.route("/updatescore")
     .put(function (req, res) {
          let user = {username: req.user.username};
          let newHighScore;
          if(req.body.lastgamescore > req.user.highestscore){
               newHighScore = req.body.lastgamescore;
          }
          else{
               newHighScore = req.user.highestscore;
          }
          let updateInfo = {lastgamescore: req.body.lastgamescore, numberofgames: (req.user.numberofgames+1), highestscore: newHighScore}
          db.Player
               .findOneAndUpdate(user, updateInfo, {
                    new: true
               })
               .then(dbPlayer => res.json(dbPlayer))
               .catch(err => {
                    console.log(err);
                    res.status(422).json(err)
               });
})

router.route("/logout")
     .post(function (req, res) {
          console.log("logout function called\n");
          console.log(req.user);
     if (req.user) {
          req.logout()
          res.send({ msg: 'logging out' })
     } else {
          res.send({ msg: 'no user to log out' })
     }
})

module.exports = router;