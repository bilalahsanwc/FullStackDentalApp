import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CtaComponent from "../../components/CtaComponent/CtaComponent";
import { businessData } from "../../data/businessData";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  MoveRight,
} from "lucide-react";
import { useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import {
  fadeRight,
  fadeIn,
  fadeUp,
  fadeLeft,
  scaleIn,
} from "../../assets/animation";
import SEO from "../../components/SEO/SEO";

function Home() {
  const MotionLink = motion(Link);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left → next testimonial
      setTestimonialIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }

    if (distance < -minSwipeDistance) {
      // Swipe right → previous testimonial
      setTestimonialIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };
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
      <SEO
        title="Loyal Dentistry | Family Dentist"
        description="Modern family dentistry website offering preventive, cosmetic, and restorative dental care."
      />
      <div className="hero-wrapper">
        <Header></Header>
        <section className="hero">
          <div className="hero-content">
            <motion.h1 {...fadeLeft}>
              <span>{businessData.homepage.hero.heading1}</span>
              <br />
              <span>{businessData.homepage.hero.heading2}</span>
              <br />
              <span>{businessData.homepage.hero.heading3}</span>
            </motion.h1>
            <motion.span {...fadeLeft} className="tagline">
              {businessData.homepage.hero.subheading}
            </motion.span>
            <Button
              href="book"
              animation={fadeLeft}
              className="homepage-cta"
              ctaText={businessData.homepage.hero.buttonText}
            ></Button>
          </div>
        </section>
      </div>
      <section className="about">
        <div className="about-content">
          <div className="about-c1">
            <motion.h2 {...fadeLeft}>ABOUT US</motion.h2>
            <motion.p {...fadeLeft}>
              {businessData.homepage.clinicInfo.about}
            </motion.p>
            <Button
              href="about"
              animation={fadeLeft}
              className="homepage-cta"
              ctaText={businessData.homepage.clinicInfo.ctaText}
            ></Button>
          </div>
          <div className="about-c2">
            <img src={businessData.homepage.clinicInfo.aboutImg} alt="" />
          </div>
        </div>
      </section>
      <section className="team">
        <div className="team-content">
          <div className="team-content-r1">
            <motion.span {...fadeUp} className="team-Heading">
              Meet The Team
            </motion.span>
          </div>
          <div className="team-content-r2">
            <motion.img
              className="team-content-r2-img"
              {...scaleIn}
              src={businessData.homepage.doctors[0].image}
              alt=""
            />
            <div className="team-content-r2-div">
              <div className="doctor-info">
                <motion.span {...fadeRight} className="doctorName">
                  {businessData.homepage.doctors[0].name}
                </motion.span>
                <motion.span {...fadeRight} className="degree">
                  {businessData.homepage.doctors[0].credentials}
                </motion.span>
              </div>
              <Button
                href="about"
                animation={fadeUp}
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
            <motion.span {...fadeRight} className="services-heading">
              OUR SERVICES
            </motion.span>
            <MotionLink {...fadeLeft} to="services">
              VIEW ALL
            </MotionLink>
          </div>
          <div className="services-container">
            <motion.div {...scaleIn} className="service" id="service1">
              <span className="service-text">Dental Fillings</span>
              <MoveRight className="move-right-icon" />
            </motion.div>
            <motion.div {...scaleIn} className="service" id="service2">
              <span className="service-text">Teeth Whitening</span>
              <MoveRight className="move-right-icon" />
            </motion.div>
            <motion.div {...scaleIn} className="service" id="service3">
              <span className="service-text">Dentures</span>
              <MoveRight className="move-right-icon" />
            </motion.div>
            <motion.div {...scaleIn} className="service" id="service4">
              <span className="service-text">Dental Hygiene</span>
              <MoveRight className="move-right-icon" />
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section {...fadeUp} className="testimonials">
        <div className="testimonials-content">
          <h2>What Our Clients Say</h2>

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
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="testimonials-slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {testimonials[testimonialIndex]}
              </motion.div>
            </AnimatePresence>{" "}
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
      </motion.section>
      <CtaComponent
        bgImage={businessData.homepage.ctaSection.bgImage}
        h={businessData.homepage.ctaSection.heading}
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
