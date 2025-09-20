const express = require("express");
const { getDoctors } = require("../controllers/UserController");

const router = express.Router();

// GET /api/doctors
router.get("/getdoc", getDoctors);

module.exports = router;
