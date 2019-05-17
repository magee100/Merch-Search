const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/")
    .get(itemController.findNew)
    .post(itemController.addItem)

module.exports = router;
