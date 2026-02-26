const nodemailer = require('nodemailer')

// const transporter = 
const senMail = async (to,subject,text)=>{
 await transporter.sendMail({
    to,
    subject,
    text
  })
}

module.exports = {senMail}