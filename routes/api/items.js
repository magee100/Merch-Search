const router = require("express").Router();
const itemController = require("../../controllers/itemController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router
    .route("/")
    .get(isAuthenticated, itemController.findNew)
    .post(itemController.addItem)

router
    .route("/:id")
    .get(itemController.findById)
    

module.exports = router;
