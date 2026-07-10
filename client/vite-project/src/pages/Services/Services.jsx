import React from "react";
import Header from "../../components/Header/Header";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import { businessData } from "../../data/businessData";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent";
import CtaComponent from "../../components/CtaComponent/CtaComponent";
import TestimonialCard from "../../components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Services.css";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from "../../assets/animation";
import SEO from "../../components/SEO/SEO";

function Services() {
  const testimonials = Object.values(businessData.homepage.testimonials).map(
    (testimonial, i) => (
      <TestimonialCard
        key={i}
        review={testimonial.reviewText}
        name={testimonial.patientName}
      />
    ),
  );
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const services = Object.values(businessData.servicepage.services).map(
    (service, index) => (
      <ServiceComponent
        imagePath={service.imgPath}
        key={service.title}
        h2={service.title}
        reverse={index % 2 !== 0}
        p={service.description}
        icon={service.icon}
        ctaText={service.ctaText}
      />
    ),
  );
  return (
    <div className="servicepage">
      <SEO
        title="Dental Services | Loyal Dentistry"
        description="Explore our comprehensive dental services, including preventive, restorative, and cosmetic treatments."
      />
      <Header></Header>
      <HeroComponent
        animation={scaleIn}
        heading={businessData.servicepage.heroHeading}
        bgPath={businessData.servicepage.heroImg}
      ></HeroComponent>
      {services}
      <CtaComponent
        className="ctaComp"
        h={businessData.servicepage.ctaSection.heading}
        subH={businessData.servicepage.ctaSection.subHeading}
        compCtaText={businessData.servicepage.ctaSection.ctaText}
        compHref={businessData.servicepage.ctaSection.href}
        bgImage={businessData.servicepage.ctaSection.bgImage}
      ></CtaComponent>
      <section className="testimonials">
        <div className="testimonials-content">
          <h2 className="testimonials-content-h2">What Our Clients Say</h2>
          <div className="testimonials-container">
            <ChevronLeft
              style={{ width: "40px", height: "40px" }}
              className="testimonials-mover"
              onClick={() =>
                setTestimonialIndex((prev) =>
                  prev === 0 ? maxIndex : prev - 1,
                )
              }
            />
            <div className="testimonials-slider">
              {testimonials[testimonialIndex]}
            </div>
            <ChevronRight
              style={{ width: "40px", height: "40px" }}
              className="testimonials-mover"
              onClick={() =>
                setTestimonialIndex((prev) =>
                  prev === maxIndex ? 0 : prev + 1,
                )
              }
            />
          </div>
          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${testimonialIndex === i ? "active" : ""}`}
                onClick={() => setTestimonialIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
