import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
console.log(process.env.CLINIC_EMAIL);
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email server is ready");
  }
});

export default transporter;
