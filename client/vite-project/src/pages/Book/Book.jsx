import "./Book.css";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import businessData from "../../data/businessData";
import ContactForm from "../../components/ContactForm/ContactForm";
import { CircleCheckBig, LoaderCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from "../../assets/animation";
import SEO from "../../components/SEO/SEO";

function Book() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDays: [],
    preferredTimings: [],
    additionalInfo: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [bookedSuccessfully, setBookedSuccessfully] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/appointments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }
      toast.success("Appointment request sent successfully!");
      setFormData(initialState);
      setBookedSuccessfully(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bookPage">
      <SEO
        title="Book an Appointment"
        description="Request an appointment using our convenient online booking form."
      />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid #333",
            fontFamily: "var(font-body)",
          },
          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#fff",
            },
          },
        }}
      />
      <Header></Header>
      <HeroComponent
        animation={scaleIn}
        heading={businessData.contactPage.heroHeading}
        bgPath={businessData.contactPage.heroImg}
      ></HeroComponent>
      <section
        className={`bookAppointment ${bookedSuccessfully ? "short" : ""}`}
      >
        <div className="bookAppointment-content">
          <motion.h2
            {...fadeLeft}
            className={`${bookedSuccessfully ? "hideHeading" : ""}`}
          >
            Book Your Appointment
          </motion.h2>
          {bookedSuccessfully ? (
            <div className="appointmentSuccess">
              <div className="successIcon">
                <CircleCheckBig size={42} strokeWidth={2.5} />
              </div>
              <h3>Appointment Request Sent</h3>

              <p>
                Thank you for choosing <strong>Loyal Dentistry</strong>.
              </p>

              <p>
                Our team has received your appointment request and will contact
                you shortly to confirm your preferred date and time.
              </p>

              <button
                type="button"
                className="formbtn"
                // className="bookAgainBtn"
                onClick={() => setBookedSuccessfully(false)}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} action="" method="POST">
              <motion.div {...fadeUp} className="simpleInput">
                <label htmlFor="firstName">First Name</label>
                <input
                  disabled={isSubmitting}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div {...fadeUp} className="simpleInput">
                <label htmlFor="lastName">Last Name</label>
                <input
                  disabled={isSubmitting}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div {...fadeUp} className="simpleInput">
                <label htmlFor="email">Email</label>
                <input
                  disabled={isSubmitting}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div {...fadeUp} className="simpleInput">
                <label htmlFor="phone">Phone</label>
                <input
                  disabled={isSubmitting}
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </motion.div>
              <fieldset>
                <motion.legend>What days work best for you?</motion.legend>
                <motion.div {...fadeUp} className="checkbox-group">
                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="monday"
                      name="preferredDays"
                      onChange={handleCheckboxChange}
                      value="Monday"
                      checked={formData.preferredDays.includes("Monday")}
                    />
                    <label htmlFor="monday">Monday</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      id="tuesday"
                      name="preferredDays"
                      onChange={handleCheckboxChange}
                      value="Tuesday"
                      checked={formData.preferredDays.includes("Tuesday")}
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      id="wednesday"
                      name="preferredDays"
                      onChange={handleCheckboxChange}
                      value="Wednesday"
                      checked={formData.preferredDays.includes("Wednesday")}
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                  </div>

                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="thursday"
                      name="preferredDays"
                      onChange={handleCheckboxChange}
                      value="Thursday"
                      checked={formData.preferredDays.includes("Thursday")}
                    />
                    <label htmlFor="thursday">Thursday</label>
                  </div>

                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="friday"
                      name="preferredDays"
                      onChange={handleCheckboxChange}
                      value="Friday"
                      checked={formData.preferredDays.includes("Friday")}
                    />
                    <label htmlFor="friday">Friday</label>
                  </div>
                </motion.div>
              </fieldset>
              <fieldset>
                <legend>What time works best for you?</legend>
                <motion.div {...fadeUp} className="checkbox-group">
                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="morning"
                      name="preferredTimings"
                      onChange={handleCheckboxChange}
                      value="Morning"
                      checked={formData.preferredTimings.includes("Morning")}
                    />
                    <label htmlFor="morning">Morning</label>
                  </div>

                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="afternoon"
                      name="preferredTimings"
                      onChange={handleCheckboxChange}
                      value="Afternoon"
                      checked={formData.preferredTimings.includes("Afternoon")}
                    />
                    <label htmlFor="afternoon">Afternoon</label>
                  </div>

                  <div>
                    <input
                      disabled={isSubmitting}
                      type="checkbox"
                      id="evening"
                      name="preferredTimings"
                      onChange={handleCheckboxChange}
                      value="Evening"
                      checked={formData.preferredTimings.includes("Evening")}
                    />
                    <label htmlFor="evening">Evening</label>
                  </div>
                </motion.div>
              </fieldset>
              <motion.div {...fadeUp} className="additional-info">
                <label htmlFor="comments">Additional Info</label>
                <textarea
                  disabled={isSubmitting}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  id="additionalInfo"
                  name="additionalInfo"
                ></textarea>
              </motion.div>
              <motion.button
                {...fadeUp}
                className="formbtn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="spinner" size={18} />
                    Sending Request...
                  </>
                ) : (
                  "Request Appointment"
                )}
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Book;
