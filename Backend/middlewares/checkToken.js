const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config.json')

module.exports.chechToken = async (req, res, next) => {
    try {
        const tokenHeader = req.get('authorization')
        if (!tokenHeader) throw new Error('No JWT found');
        const token = tokenHeader.split(' ')[1];
        const decoded = jwt.verify(token, PRIVATE_KEY);
        if (!decoded) throw new Error(' Unauthorized token');
        req.token = decoded
        next();
    } catch (error) {
        next(error);
    }
}