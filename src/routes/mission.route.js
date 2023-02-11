const express = require('express');
const router = express.Router();
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, missionController.createMission);
router.get('/', verifyToken, missionController.getMission);
router.get('/list', verifyToken, missionController.missionList);

module.exports = router;