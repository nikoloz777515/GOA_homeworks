const express = require('express');
const AuthRouter = express.Router();

const {login,signup} = require('../controllers/auth.controller')

AuthRouter.post('/login',login);
AuthRouter.post('/signup',signup)

module.exports = AuthRouter;