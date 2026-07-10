import React from "react";
import { MoveRight } from "lucide-react";
import "./Button.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Button({ ctaText, href, animation }) {
  const MotionLink = motion(Link);
  return (
    <MotionLink {...animation} className="btn-component" to={href}>
      <span className="btnText">{ctaText}</span>
      <span className="move-right">
        <MoveRight />
      </span>
    </MotionLink>
  );
}

export default Button;
