const nodemailer = require('nodemailer')

const transported = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth:{
    user: "9be6f657daef53",
    pass: "080cc43a6476f3"
  }
})

const sendMail = async(to,subject,text) =>{
  await transported.sendMail({
    to,
    subject,
    text
  })
}

module.exports = sendMail;