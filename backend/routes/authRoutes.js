// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { validateAuth } = require('../validators/authValidator');

router.post('/signup', validateAuth, signup);
router.post('/login', validateAuth, login);

module.exports = router;
