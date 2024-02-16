const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
const {EMAIL_ID} = require('../config/serverConfig')
const {EMAIL_PASS} = require('../config/serverConfig')


const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports={
    transporter
}

  

