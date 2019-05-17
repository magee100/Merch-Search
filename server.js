const express = require("express");
const session = require("express-session");
const passport = require("./config/passport")
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
var db = require("./models");

const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// use sessions to keep track of our user's login status
app.use(session({secret: "merch keyboard", resave: true, saveUnitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//Reaquiring our routes
require("./routes/login-routes/html-routes")(app);
require("./routes/login-routes/api-routes")(app);



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/merchdb");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
