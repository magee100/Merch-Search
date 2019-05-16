const router = require("express").Router();
const itemRoutes =  require("./items")
const archiveRoutes = require ("./archive")

router.use("/items", itemRoutes);
router.use("/archive", archiveRoutes);


module.exports = router