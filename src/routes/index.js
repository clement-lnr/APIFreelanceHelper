const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const userRouter = require('./user.route');
const freelanceRouter = require('./freelance.route');
const missionRouter = require('./mission.route')

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/", freelanceRouter);
router.use("/mission", missionRouter);

module.exports = router;