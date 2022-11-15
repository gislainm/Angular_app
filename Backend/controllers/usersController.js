const bcrypt = require('bcrypt');
const User = require('../model/usersModel')
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config.json');

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) throw new Error('Student not found');
        const match = bcrypt.compare(password, user.password);
        if (!match) throw new Error('wrong password');
        const token = { ...user._doc, password: '***' };
        const tokenHash = jwt.sign(token, PRIVATE_KEY);
        res.json({ success: true, data: tokenHash });
    } catch (error) {
        next(error)
    }
}

module.exports.signup = async (req, res, next) => {
    try {
        console.log(req.body);
        const { password } = req.body;
        const hashPwd = await bcrypt.hash(password, 10);
        const result = await User.create({ ...req.body, password: hashPwd, avatar: req.file.filename });
        res.json({ success: true, data: { ...result._doc, password: '***' } })
    } catch (error) {
        next(error)
    }
}
//avatar: req.file.filename 