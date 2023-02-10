const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, missionController.createMission);

module.exports = router;