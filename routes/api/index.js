const router = require("express").Router();
const tasksRoutes = require("./tasks");

// tasks routes
router.use("/tasks", tasksRoutes);

module.exports = router;
