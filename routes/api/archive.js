const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/")
    .get(itemController.findAll)
    .post(itemController.addItem)
module.exports = router;
