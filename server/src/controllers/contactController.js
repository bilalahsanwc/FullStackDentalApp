import Contact from "../models/Contact.js";
import { sendContactEmail } from "../services/emailService.js";
export const createContactFormAppointment = async (req, res) => {
  try {
    console.log(req.body);
    const { name, phone, message } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is Required",
      });
    }
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone Number is Required",
      });
    }
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number",
      });
    }
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is Required",
      });
    }

    const contactAppointment = await Contact.create({
      name,
      phone: cleanedPhone,
      message,
    });

    try {
      await sendContactEmail({ name, phone: cleanedPhone, message });
    } catch (error) {
      console.error("Email Failed: ", error);
    }

    res.status(201).json({
      success: true,
      message: "Message Delivered Successfully",
      data: contactAppointment,
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
