const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router
    .route("/")
    .get(itemController.findNew)
    .post(itemController.addItem)

router
    .route("/:id")
    .get(itemController.findById)
    

module.exports = router;
