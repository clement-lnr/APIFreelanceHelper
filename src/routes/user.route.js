const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, userController.getUser);
router.put('/', verifyToken, userController.updateUser);

module.exports = router;