const express = require('express');
const {PORT} = require('./src/config/serverConfig')
const connect = require('./src/config/database');
const {sendMessage} = require('./src/controllers/sendMessage')
const cors = require('cors');
const userRouter = require('./src/routes/userRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/',userRouter);
app.listen(PORT,()=>{

    console.log(`Server started at the port ${PORT}`)
    connect();
    console.log("Yup!! Server is runnning");
})