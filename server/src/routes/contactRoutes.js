import express from "express";
import { createContactFormAppointment } from "../controllers/contactController.js";
const router = express.Router();

router.post("/", createContactFormAppointment);

export default router;
