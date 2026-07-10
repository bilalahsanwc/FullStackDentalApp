import { ChevronDown, MessageCircle, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import { CircleCheckBig } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

function ContactForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isCloseForm, setIsCloseForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeForm = () => {
    setIsCloseForm(true);

    setTimeout(() => {
      setIsMounted(false);
    }, 300); // same as your CSS transition duration
  };

  const openForm = () => {
    setIsMounted(true);

    // wait one frame so React renders it
    requestAnimationFrame(() => {
      setIsCloseForm(false);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      requestAnimationFrame(() => {
        setIsCloseForm(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const initialState = {
    name: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contactAppointments`,
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
      toast.success("Message sent successfully!");
      setFormData(initialState);
      setIsMounted(false);
      setIsCloseForm(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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

      <div
        className={`contactFormWidget ${
          isMounted ? "widgetOpen" : "widgetClosed"
        }`}
      >
        {isMounted && (
          <div
            className={`contactForm ${isCloseForm ? "hideForm" : "showForm"}`}
          >
            <div className="contactForm-content">
              <div className="contactForm-head">
                <h6>Hi there!</h6>
                <p>Questions? We are here to help! Send us a message below.</p>
              </div>
              <form action="" onSubmit={handleSubmit} method="POST">
                <div className="contactFormInput">
                  <label htmlFor="name">Name</label>
                  <input
                    disabled={isSubmitting}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="phoneInputContainer">
                  <div className="phoneInputContainer-c1">
                    <span>US +1</span>
                    <ChevronDown size={16} />
                  </div>
                  <div className=" phoneInputContainer-c2 contactFormInput">
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                      disabled={isSubmitting}
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contactFormInput">
                  <label htmlFor="message">Message</label>
                  <textarea
                    disabled={isSubmitting}
                    type="text"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="spinner" size={18} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>{" "}
              </form>
            </div>
          </div>
        )}
        <button
          className="contact-toggle"
          onClick={() => {
            if (isMounted) {
              closeForm();
            } else {
              openForm();
            }
          }}
        >
          <MessageCircle
            className={`icon message ${isCloseForm ? "show" : "hide"}`}
          />

          <X className={`icon close ${isCloseForm ? "hide" : "show"}`} />
        </button>
      </div>
    </>
  );
}

export default ContactForm;
