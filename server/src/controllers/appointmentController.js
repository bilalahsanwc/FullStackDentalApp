import transporter from "../config/email.js";
import Appointment from "../models/Appointment.js";
import { sendAppointmentEmail } from "../services/emailService.js";
export const createAppointment = async (req, res) => {
  try {
    console.log(req.body);
    const emailRegex = /^\S+@\S+\.\S+$/;
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredDays,
      preferredTimings,
      additionalInfo,
    } = req.body;
    if (!firstName) {
      return res.status(400).json({
        success: false,
        message: "First Name is Required",
      });
    }
    if (!lastName) {
      return res.status(400).json({
        success: false,
        message: "Last Name is Required",
      });
    }
    const trimmedEmail = email?.trim();
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Please enter a phone number",
      });
    }
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number",
      });
    }
    if (!Array.isArray(preferredDays) || preferredDays.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Select at least one preferred day.",
      });
    }
    if (!Array.isArray(preferredTimings) || preferredTimings.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Select at least one preferred Time.",
      });
    }

    // const appointment = await Appointment.create();
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email: trimmedEmail,
      phone: cleanedPhone,
      preferredDays,
      preferredTimings,
      additionalInfo,
    });

    try {
      await sendAppointmentEmail({
        firstName,
        lastName,
        email: trimmedEmail,
        phone: cleanedPhone,
        preferredDays,
        preferredTimings,
        additionalInfo,
      });
    } catch (err) {
      console.error("Email failed:", err);
    }
    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      data: appointment,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
