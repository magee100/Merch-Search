const db = require("../database/models");

module.exports = {

    getUser: function (req, res) {
        db.User
            .find({email: req.query.email})
            .find({password: req.query.password})
            .find({firstName: req.query.firstName})
            .find({lastName: req.query.lastName})
            .then(user =>{
                console.log(user)
                res.json(user)
                res.send({
                  success: true,
                  message: "Signed up!"
                })
            })
            .catch(err => res.status(422).json(err));
    },

    signUpUser: function(req, res) {
        const user = new db.User(req.body)
        db.User
          .create(req.body)
          .then(dbModel => {
              console.log(dbModel)  
              res.json(dbModel)
            })
          .catch(err => {
              console.log(err)
              res.status(422).json(err)
        });
      },
      // Sign-In function HELP!
      signInUser: function(req, res) {
        db.User
            .find({email: req.query.email})
            .find({password: req.query.password})
            .find({firstName: req.query.firstName})
            .find({lastName: req.query.lastName})
            .then(user =>{
                console.log(user)
                res.json(user)
                res.send({
                  success: true,
                  message: "Signed in!"
                })
            })
            .catch(err => res.status(422).json(err));

            const userSession = new UserSession();
            userSession.userID = user._id;
            userSession.save((err, doc) => {
              if(err){
                return res.send({
                  success: false, 
                  message: "error: server error"
                });
              }
              return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
              });
            })
    },
}