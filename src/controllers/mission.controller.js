const Mission = require('../models/mission.model');

exports.createMission = async (req, res) => {
    const newMission = new Mission({
        creatorId: req.userToken.id,
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        totalAmount: req.body.totalAmount,
        status: req.body.status
    });

    try{
        await newMission.save()
        .then((mission) => {
            res.send({
                message: "Mission registered",
                mission: mission
            });
        })
    } catch (err) {
        res.status(400).send(err);
    }
}

