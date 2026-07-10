import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CtaComponent from "../../components/CtaComponent/CtaComponent";

import { businessData } from "../../data/businessData";
import "./Home.css";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  MoveRight,
} from "lucide-react";
import { useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";
function Home() {
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
  return (
    <div className="homepage">
      <div className="hero-wrapper">
        <Header></Header>
        <section className="hero">
          <div className="hero-content">
            <h1>
              <span>{businessData.homepage.hero.heading1}</span>
              <br />
              <span>{businessData.homepage.hero.heading2}</span>
              <br />
              <span>{businessData.homepage.hero.heading3}</span>
            </h1>
            <span className="tagline">
              {businessData.homepage.hero.subheading}
            </span>
            <Button ctaText={businessData.homepage.hero.buttonText}></Button>
          </div>
        </section>
      </div>
      <section className="about">
        <div className="about-content">
          <div className="about-c1">
            <h2>ABOUT US</h2>
            <p>{businessData.homepage.clinicInfo.about}</p>
            <Button ctaText={businessData.homepage.clinicInfo.ctaText}></Button>
          </div>
          <div className="about-c2">
            <img src={businessData.homepage.clinicInfo.aboutImg} alt="" />
          </div>
        </div>
      </section>
      <section className="team">
        <div className="team-content">
          <div className="team-content-r1">
            <span className="team-Heading">Meet The Team</span>
          </div>
          <div className="team-content-r2">
            <img src={businessData.homepage.doctors[0].image} alt="" />
            <div>
              <div className="doctor-info">
                <span className="doctorName">
                  {businessData.homepage.doctors[0].name}
                </span>
                <br />
                <span className="degree">
                  {businessData.homepage.doctors[0].credentials}
                </span>
              </div>
              <Button
                className="cta1"
                ctaText={businessData.homepage.doctors[0].ctaText}
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="services-content">
          <div className="services-r1">
            <span className="services-heading">OUR SERVICES</span>
            <a href="">VIEW ALL</a>
          </div>
          <div className="services-container">
            <div className="service" id="service1">
              <span className="service-text">GENERAL DENTISTRY</span>
              <MoveRight className="move-right-icon" />
            </div>
            <div className="service" id="service2">
              <span className="service-text">COSMETIC DENTISTRY</span>
              <MoveRight className="move-right-icon" />
            </div>
            <div className="service" id="service3">
              <span className="service-text">LASER DENTISTRY</span>
              <MoveRight className="move-right-icon" />
            </div>
            <div className="service" id="service4">
              <span className="service-text">INVISALIGN CLEAR BRACES</span>
              <MoveRight className="move-right-icon" />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonials-content">
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
      <CtaComponent
        h={businessData.homepage.ctaSection.heading}
        icon={businessData.homepage.ctaSection.icon}
        subH={businessData.homepage.ctaSection.subheading}
        compCtaText={businessData.homepage.ctaSection.CtaText}
      ></CtaComponent>
      <section className="map">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8275666198406!2d-118.05507682587591!3d34.12516391387905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2db359334da8b%3A0x412e349fddceb219!2sLoyal%20Dentistry%20Arcadia!5e0!3m2!1sen!2s!4v1782337484548!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
