const LocalStrategy = require("passport-local").Strategy;
const Player = require("../models/player");
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const { Strategy } = require("passport");
module.exports = passport => {
=======
const passport = require("passport");


>>>>>>> 046cf39cb123c077ec78b4df7e38c62b70dc1f23
    // serialize the user.id to save in the cookie session
    // so the browser will remember the user when login
    passport.serializeUser((user, done) => {
        console.log("serilize");
        console.log(user._id);
        console.log("************************");
        done(null, user._id);
    });
    // deserialize the cookieUserId to user in the database
    passport.deserializeUser((id, done) => {
        console.log("deserializer");
        console.log(id);
        Player.findById(id)
            .then(user => {
                console.log(user);
                console.log("************************");
                done(null, user);
            })
            .catch(e => {
                done(new Error("Failed to deserialize an user"));
            });
    });
    passport.use(
        new LocalStrategy(
<<<<<<< HEAD
            {
                usernameField: "username"
            },
            (username, password, done) => {
                // Matcch User
=======
            (username, password, done) => {
                // Match User
                console.log("In local strategy");
>>>>>>> 046cf39cb123c077ec78b4df7e38c62b70dc1f23
                Player.findOne({
                    username: username
                })
                    .then(user => {
                        console.log("local strategy!!", user);
                        if (!user) {
                            return done(null, false, {
                                message: "That email is not registered"
                            });
                        }
                        // Match password
                        bcrypt.compare(password, user.password, (err, isMatch) => {
                            console.log("match*****", isMatch);
                            if (err) throw err;
<<<<<<< HEAD
                            if (isMatch !== false) {
=======
                            if (isMatch === true) {
>>>>>>> 046cf39cb123c077ec78b4df7e38c62b70dc1f23
                                console.log("log in successful");
                                return done(null, user);
                            }
                            return done(null, false, {
                                message: "Password incorrect"
                            });
                        });
                    })
                    .catch(err => console.log(err));
            }
        )
    );


module.exports = passport;