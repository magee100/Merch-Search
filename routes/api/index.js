const router = require("express").Router();
const itemRoutes =  require("./items");
const archiveRoutes = require ("./archive");
const userRoutes = require("./api-routes");
const htmlRoutes = require("./html-routes");

router.use("/items", itemRoutes);
router.use("/archive", archiveRoutes);
router.use("/user", userRoutes);
router.use("/html", htmlRoutes);


module.exports = router