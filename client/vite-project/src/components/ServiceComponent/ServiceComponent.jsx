import React from "react";
import "./ServiceComponent.css";
import Button from "../Button/Button";
import { fadeUp, fadeLeft, fadeRight, scaleIn } from "../../assets/animation";
import { motion } from "framer-motion";
function ServiceComponent({
  imagePath,
  h2,
  p,
  icon: Icon,
  reverse,
  ctaText,
  href,
  animation,
}) {
  return (
    <div className="serviceComponentContainer">
      <div className={`serviceComponent ${reverse ? "reverse" : ""}`}>
        <div className="image-container">
          <motion.img {...fadeUp} src={imagePath} alt="" />
        </div>
        <div className="details-container">
          <div>
            <motion.h2 {...fadeUp}>{h2}</motion.h2>
            <motion.p {...fadeUp} className="serviceCompPara">
              {p}
            </motion.p>
            <Button
              animation={fadeUp}
              className="serviceCompCta"
              ctaText={ctaText}
              href="/book"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
