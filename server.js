const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose")
const passport = require("./config/passport");
const session = require('express-session')

//Setting up port and requiring models which is in the database folder 
const PORT = process.env.PORT || 3001;
require("./database")
// Creating express app and configuring middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json());
app.use(express.static("public"));
//Use session to keep track of our user's login status
app.use(session({secret: "keyboard merch", resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api/api-routes')(app);

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
