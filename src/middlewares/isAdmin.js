const jwt = require('jsonwebtoken');

function isAdminToken (req, res, next) {
    if(!req.userToken.isAdmin) {
        res.status('401').send({
            auth:false,
            message: 'User must be an admin'
        })
    }
    next();
}
module.exports = isAdminToken;