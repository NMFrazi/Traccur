const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser")
const app = express();
const keys = require("./config/keys.js");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse cookies
app.use(cookieParser());
app.use(cookieSession ({
     maxAge: 24 * 60 * 60 * 1000,
     keys: [keys.session.cookieKey]
}));
// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
     app.use(express.static("client/build"));
}
// Add routes, both API
app.use(routes);

app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamedb", {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, function () {
     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});