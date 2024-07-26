const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validateRequest');

// User registration
router.post('/register', validateRegister, register);

// User login
router.post('/login', validateLogin, login);

module.exports = router;
