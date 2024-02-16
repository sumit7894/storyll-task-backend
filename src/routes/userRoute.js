const express = require('express');
const validatePhone = require('../middleware/validator')
const {addUsers,getUsers} = require('../controllers/user-controller');
const userRouter = express.Router();

userRouter.route('/add').post(validatePhone,addUsers);

userRouter.route('/users').get(getUsers);

module.exports = userRouter;
