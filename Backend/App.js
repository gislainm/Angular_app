const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const { DB_URL } = require('./config.json');
const studentRouter = require('./routers/studentsRouter');
const userRouter = require('./routers/usersRouter')
const { chechToken } = require('./middlewares/checkToken')

const app = express();

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`DB connected`))
    .catch((e) => console.log(e))


app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use('/api', chechToken, studentRouter)
app.use('/api', userRouter)

app.use((err, req, res, next) => {
    res.status(500).json({ success: false, data: err.message })
});
app.listen(8080, () => console.log('app connected on port 8080'));