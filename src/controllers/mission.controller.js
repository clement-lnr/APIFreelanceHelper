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

    if(req.userToken.userType == 'entreprise') {
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
    } else {
        res.status(401).send({
            message: "User must be an entreprise",
        })
    }
}


exports.getMission = async (req, res) => {
    if(req.userToken.userType == 'entreprise') {
        Mission.find({creatorId: req.userToken.id})
        .then(mission => {
            res.send(mission);
        })
        .catch(err => {
            res.status(400).send(err);
        })
    } else {
        res.status(401).send({
            message: "User must be an entreprise",
        })
    }
}

//array issue
exports.missionList = async (req, res) => {
    if(req.userToken.userType == 'freelance') {
        Mission.find({Collaborators: req.userToken.id})
        .then(mission => {
            res.send(mission);
        })
        .catch(err => {
            res.status(400).send(err);
        })
    } else {
        res.status(401).send({
            message: "User must be an entreprise",
        })
    }
}