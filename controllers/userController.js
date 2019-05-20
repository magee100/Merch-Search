const db = require("../database/models");

module.exports = {

    getUser: function (req, res) {
        db.User
            .find({username: req.query.username})
            .then(user =>{
                console.log(user)
                res.json(user)
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
}