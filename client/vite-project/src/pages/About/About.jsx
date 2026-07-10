import "./About.css";
import React, { useState } from "react";
import { businessData } from "../../data/businessData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import MoreAboutUs from "../../components/MoreAboutUs/MoreAboutUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import ContactForm from "../../components/ContactForm/ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import {
  scaleIn,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "../../assets/animation";
import SEO from "../../components/SEO/SEO";

function About() {
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
      // Swiped left → next image
      setcurrentImgIndex((prev) =>
        prev === maxImagesIndex - 1 ? 0 : prev + 1,
      );
    }

    if (distance < -minSwipeDistance) {
      // Swiped right → previous image
      setcurrentImgIndex((prev) =>
        prev === 0 ? maxImagesIndex - 1 : prev - 1,
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };
  const doctors = Object.values(businessData.homepage.doctors).map((doc, i) => (
    <DoctorCard
      animation={fadeUp}
      key={i}
      img={doc.image}
      name={doc.name}
      degree={doc.credentials}
      about={doc.detailedBio}
    />
  ));
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  const images = Object.values(
    businessData.homepage.clinicInfo.interiorImages,
  ).map((img, i) => <img key={i} src={img.src} alt={img.alt} />);
  const maxDocIndex = doctors.length;
  const maxImagesIndex = images.length;
  const [docIndex, setDocIndex] = useState(0);
  const [moreAboutIndex, setMoreAboutIndex] = useState(0);
  return (
    <div className="aboutpage">
      <SEO
        title="About Us | Loyal Dentistry"
        description="Meet the experienced team behind Loyal Dentistry and learn about our commitment to patient care."
      />
      <Header></Header>
      <HeroComponent
        animation={{
          ...scaleIn,
          initial: {
            ...scaleIn.initial,
            scale: 0.35,
          },
          transition: {
            ...scaleIn.transition,
            duration: 1,
          },
        }}
        heading={businessData.aboutpage.heroHeading}
        bgPath={businessData.aboutpage.heroImg}
      />
      <section className="aboutsection">
        <div className="about-content">
          <motion.h1 {...fadeIn}>About Us</motion.h1>
          <motion.p
            {...fadeIn}
            viewport={{
              ...fadeIn.viewport,
              amount: 0.05,
            }}
          >
            {businessData.homepage.clinicInfo.detailedAbout}
          </motion.p>
        </div>
      </section>
      <section className="meetTeam">
        <div className="meetTeam-content">
          <motion.h2 {...fadeLeft}>Our Team</motion.h2>
          <div className="team-slider">
            <ChevronLeft
              className="team-slider-icon"
              onClick={() =>
                setDocIndex((prev) => (prev === 0 ? maxDocIndex : prev - 1))
              }
            />
            {doctors[docIndex]}
            <ChevronRight
              className="team-slider-icon"
              onClick={() =>
                setDocIndex((prev) => (prev === maxDocIndex ? 0 : prev + 1))
              }
            />
          </div>
        </div>
      </section>
      <section className="moreAboutUs">
        <div className="moreAboutUs-content">
          <motion.img
            {...fadeLeft}
            src={businessData.homepage.clinicInfo.moreAboutUsImg}
            alt=""
          />
          <div className="moreAboutUs-c2">
            <div className="moreAboutUs-btncontainer">
              <motion.button
                {...fadeUp}
                className="moreAboutUs-topbtn"
                onClick={() => {
                  setMoreAboutIndex(0);
                }}
              >
                Our Difference
              </motion.button>
              <motion.button
                {...fadeUp}
                onClick={() => {
                  setMoreAboutIndex(1);
                }}
              >
                Our Mission
              </motion.button>
              <motion.button
                {...fadeUp}
                onClick={() => {
                  setMoreAboutIndex(2);
                }}
              >
                Our Values
              </motion.button>
            </div>
            {moreAboutIndex == 0 && (
              <MoreAboutUs
                h3="Our Difference"
                p={businessData.homepage.clinicInfo.difference}
              ></MoreAboutUs>
            )}
            {moreAboutIndex == 1 && (
              <MoreAboutUs
                h3="Our Mission"
                p={businessData.homepage.clinicInfo.mission}
              ></MoreAboutUs>
            )}
            {moreAboutIndex == 2 && (
              <MoreAboutUs
                h3="Our Values"
                p={businessData.homepage.clinicInfo.values}
              ></MoreAboutUs>
            )}
          </div>
        </div>
      </section>
      <section className="images">
        <div className="images-content">
          <div className="imagesContainer">
            <div className="sideImage">
              {images[(currentImgIndex - 1 + images.length) % images.length]}
            </div>
            <div
              className="mainImage"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <ChevronLeft
                onClick={() =>
                  setcurrentImgIndex((prev) =>
                    prev === 0 ? maxImagesIndex - 1 : prev - 1,
                  )
                }
                size={32}
                className="left-icon"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImgIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {images[currentImgIndex]}
                </motion.div>
              </AnimatePresence>{" "}
              <ChevronRight
                onClick={() =>
                  setcurrentImgIndex((prev) =>
                    prev === maxImagesIndex - 1 ? 0 : prev + 1,
                  )
                }
                size={32}
                className="right-icon"
              />
            </div>
            <div className="sideImage">
              {images[(currentImgIndex + 1) % images.length]}
            </div>
          </div>
          <div className="dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${currentImgIndex === i ? "active" : ""}`}
                onClick={() => setcurrentImgIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
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

export default About;
