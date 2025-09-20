const express = require("express");
const router = express.Router();
const dietController = require("../controllers/dietcontroller");

router.post("/recommend-diet", dietController.recommendDiet);

module.exports = router;
