import React from "react";
import Button from "../Button/Button";
import "./CtaComponent.css";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from "../../assets/animation";
fadeIn;
function CtaComponent({ h, subH, compCtaText, compHref, bgImage }) {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="ctaComponent"
    >
      <div className="ctaComponent-content">
        <div>
          <motion.h3 {...fadeLeft}>{h}</motion.h3>
          <motion.span {...fadeLeft} className="subHeading">
            {subH}
          </motion.span>
        </div>
        <Button
          animation={fadeUp}
          className="ctaCompBtn"
          ctaText={compCtaText}
          href="/book"
        ></Button>
      </div>
    </section>
  );
}

export default CtaComponent;
