const db = require("../database/models");

module.exports = {
    findAll: function (req, res) {
        db.Item
            .find(req.query)
            .sort({
                artist: 1
            }).then(dbModel => res.json(dbModel)
            )
            .catch(err => res.status(422).json(err));
    },

    findNew: function (req, res) {
        db.Item
            .find(req.query)
            
            .sort({
                
                date: -1

            }).then(dbModel => res.json(dbModel)
            )
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Item
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    addItem: function(req, res) {
        db.Item
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}