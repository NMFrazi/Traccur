const LocalStrategy = require("passport-local");
const Player = require("../models/Player");
const bcrypt = require("bcrypt");
module.exports = passport => {
    // serialize the user.id to save in the cookie session
    // so the browser will remember the user when login
    passport.serializeUser((user, done) => {
        console.log("serilize");
        console.log(user);
        console.log("************************");
        done(null, user.id);
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
            {
                usernameField: "email"
            },
            (email, password, done) => {
                // Matcch User
                Player.findOne({
                    email
                })
                    .then(user => {
                        console.log("local strategy", user);
                        if (!user) {
                            return done(null, false, {
                                message: "That email is not registered"
                            });
                        }
                        // Match password
                        bcrypt.compare(password, user.password, (err, isMatch) => {
                            console.log("match*****", isMatch);
                            if (err) throw err;
                            if (isMatch) {
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

};