const router = require("express").Router();
const itemController = require("../../controllers/itemController");


router.route("/archive")
    .get(itemController.findAll)
    
router.route("/")
    .get(itemController.findNew)

module.exports = router;
