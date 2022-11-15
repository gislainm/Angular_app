const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    first_name: String,
    last_name: String,
    avatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)