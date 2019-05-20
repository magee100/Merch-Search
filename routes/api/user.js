const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
//get User Page
    .get(userController.getUser)
// Register Page
    .post(userController.signUpUser)
// Login Page
    .post(userController.signInUser)
    

module.exports = router;
