import React from "react";
import "./DoctorCard.css";
import { motion } from "framer-motion";
function DoctorCard({ img, name, degree, about, animation }) {
  return (
    <motion.div
      {...animation}
      viewport={{
        ...animation.viewport,
        amount: 0.05,
      }}
      className="doctorcard"
    >
      <img src={img} alt="" />
      <div className="teamcard-c2">
        <div className="doctor-info">
          <span className="doctorName">{name}</span>
          <span className="degree">{degree}</span>
        </div>
        <div className="about-container">
          <span className="about">{about}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default DoctorCard;
