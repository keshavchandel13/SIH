const express = require('express');
const authController = require('../controllers/authController.js');
const router = express.Router();

// API Endpoints
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forget-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
