const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    avatar: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)