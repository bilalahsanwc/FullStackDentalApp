import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Phone Number is required"],
    },
    preferredDays: {
      type: [String],
      required: [true, "Atleast one Preferred Day is required"],
    },
    preferredTimings: {
      type: [String],
      required: [true, "Atleast one Preferred Timing is required"],
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Appointment", appointmentSchema);
