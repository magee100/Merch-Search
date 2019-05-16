const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/")
    .get(itemController.findNew)

module.exports = router;
