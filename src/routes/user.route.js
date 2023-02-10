const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/', verifyToken, userController.getUser);
router.put('/', verifyToken, userController.updateUser);

module.exports = router;