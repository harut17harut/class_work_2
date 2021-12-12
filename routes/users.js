const express = require('express');
const route = express.Router();
const { User } = require('../controllers/User');
const validation = require('../validations/signup');

route.get('/',  User.login);
route.post('/',  User.login);
route.get('/signup',  User.signup);
route.post('/signup', validation.create, User.create);
module.exports = { route }