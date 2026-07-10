import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
console.log("🔥 TRANSPORTER FILE LOADED");

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

transporter.verify((error) => {
  if (error) {
    console.log("SMTP CONNECTION FAILED");
    console.error(error);
  } else {
    console.log("SMTP CONNECTION SUCCESSFUL");
  }
});
export default transporter;
