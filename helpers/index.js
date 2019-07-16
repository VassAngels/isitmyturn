//////////sendEmail
const nodeMailer = require("nodemailer");
 
const defaultEmailData = { from: "noreply@node-react.com" };
 
sendEmail = emailData => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "pass.reset.req@gmail.com",
            pass: "zsbj ftmy qamf zjmf"
        }
    });
    return (
        transporter
            .sendMail(emailData)
            .then(info => console.log(`Message sent: ${info.response}`))
            .catch(err => console.log(`Problem sending email: ${err}`))
    );
};
 
 ////////Scheduler
 exports.scheduler = (counter,emailList)=>{
  if (counter===10){counter=0}

  var currentDay = new Date();
  var today = currentDay.getDay();
  // const email = emailList[counter]
  const email = 'angelis.vassilis@gmail.com'


  const emailData={
    from:"noreply@node-react.com",
    to:email,
    subject: "DART turn reminder",
    text: "It's your turn to keep an eye on DART requests today",
    html: "<p>It's your turn to keep an eye on DART requests today</p>"
  }
sendEmail(emailData)
console.log(counter)
counter ++

console.log('Email is sent')}