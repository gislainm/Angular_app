const express = require('express')
const router = express.Router()

const { addStudent, getAll, getStudentById, updateStudentById, deleteStudentById } = require('../controllers/studentsController');

router.get('/students/all', getAll)
router.get('/students/:student_id', getStudentById)
router.post('/students/add', addStudent)
router.patch('/students/:student_id', updateStudentById)
router.delete('/students/:student_id', deleteStudentById)

module.exports = router;