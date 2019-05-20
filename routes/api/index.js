const router = require("express").Router();
const itemRoutes =  require("./items");
const archiveRoutes = require ("./archive");
const userRoutes = require("./user");

router.use("/items", itemRoutes);
router.use("/archive", archiveRoutes);
router.use("/user", userRoutes);


module.exports = router