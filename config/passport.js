const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../database/models");


passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  // Our user will sign in using an email, rather than a "username"
  function(email, password, done) {
    // When a user tries to sign in this code runs
    console.log(email, password)
    db.User.findOne({
        email: email
      }).then(function(dbUser) {
      // If there's no user with the given email
      console.log(dbUser);
      if (!dbUser) {
        console.log('NO USER FOUND');
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        console.log('NO VALID PASSWORD FOUND');
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      console.log("VALID USER:", dbUser)
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
