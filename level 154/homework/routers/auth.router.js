const express = require('express');
const AuthRouter = express.Router();

const {login,signup, verifyEmail} = require('../controllers/auth.controller')

AuthRouter.post('/login',login);
AuthRouter.post('/signup',signup)
AuthRouter.post('/verify',verifyEmail)
module.exports = AuthRouter;