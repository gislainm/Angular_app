const Student = require('../model/studentsModel')
module.exports.getAll = async (req, res, next) => {
    try {
        const results = await Student.find({});
        res.json({ success: true, data: results });
    } catch (error) {
        next(error)
    }
}

module.exports.getStudentById = async (req, res, next) => {
    try {
        const { student_id } = req.params;
        const results = await Student.findById(student_id);
        res.json({ success: true, data: results });
    } catch (error) {
        next(error)
    }
}

module.exports.addStudent = async (req, res, next) => {
    try {
        const student = req.body;
        const results = await Student.create(student);
        res.json({ success: true, data: results });
    } catch (error) {
        next(error)
    }
}

module.exports.updateStudentById = async (req, res, next) => {
    try {
        const { email, first_name, last_name, avatar } = req.body;
        const { student_id } = req.params;
        const results = await Student.updateOne({ _id: student_id }, {
            $set: { email, first_name, last_name, avatar }
        })
        res.json({ success: true, data: results });
    } catch (error) {
        next(error)
    }
}

module.exports.deleteStudentById = async (req, res, next) => {
    try {
        const { student_id } = req.params;
        const results = await Student.deleteOne({ _id: student_id });
        res.json({ success: true, data: results });
    } catch (error) {
        next(error)
    }
}
