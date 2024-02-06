import nodemailer from "nodemailer";
import sendgridtransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport(sendgridtransport({
    auth:{
        api_key: process.env.EMAIL_API
    }
}))


const sendConfirmationEmail = async (user) => {
transporter.sendMail({
    to:user.email,
    from:"imartecommerce2021@gmail.com",
    subject:"Signup success",
    html:"<h1>You have Successfully Registered to I-Mart</h1>"

}).then( () => {
    console.log("Email sent")
}).catch( (error) => {
    console.log("Email was not sent"+ error);
})
}

export default sendConfirmationEmail;