const db = require("../models");

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
}