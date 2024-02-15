const express = require('express');

const {addUsers} = require('../controllers/user-controller');
const userRouter = express.Router();

userRouter.route('/add').post(addUsers);

module.exports = userRouter;
