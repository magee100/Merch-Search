const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.getUser)
    .post(userController.signUpUser)

module.exports = router;
