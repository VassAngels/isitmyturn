const nodeMailer = require("nodemailer");
const  dotenv  =require('dotenv')
dotenv.config()


sendEmail = emailData => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    return (
        transporter
            .sendMail(emailData)
            .then(info => console.log(`Message sent: ${info.response}`))
            .catch(err => console.log(`Problem sending email: ${err}`))
    );
};
 
 
 exports.sendEmail = (counter,emailList)=>{
  if (counter===10){counter=0}

  var currentDay = new Date();
  var emailIndex = currentDay.getDay()-1;
  const email = emailList[emailIndex]
//   const email = 'angelis.vassilis@gmail.com'

  const emailData={
    from:"noreply@node-react.com",
    to:email,
    subject: "DART reminder",
    text: "It's your turn to keep an eye on DART requests today",
    html: "<p>It's your turn to keep an eye on DART requests today</p>"
  }
sendEmail(emailData)
console.log('Email is sent')}