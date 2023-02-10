const express = require('express');
const router = express.Router();
const freelanceController = require('../controllers/freelance.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, freelanceController.createFreelance);
router.get('/', freelanceController.getFreelance);
router.get('/details/:id', freelanceController.getFreelanceDetails);



module.exports = router;