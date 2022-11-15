const express = require('express')
const multer = require('multer');

const { login, signup } = require('../controllers/usersController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/users/signup', upload.single('avatar'), signup)
router.post('/users/login', login)

module.exports = router;