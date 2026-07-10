import React from "react";
import "./HeroComponent.css";
import { motion } from "framer-motion";
function HeroComponent({ heading, bgPath, animation }) {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${bgPath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="heroComponent"
    >
      <motion.span {...animation} className="hero-head">
        {heading}
      </motion.span>
    </section>
  );
}

export default HeroComponent;
