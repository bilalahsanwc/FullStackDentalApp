import { motion } from "framer-motion";
import "./MoreAboutUs.css";
import { fadeIn, fadeRight, fadeUp, fadeLeft } from "../../assets/animation";
function MoreAboutUs({ h3, p }) {
  return (
    <motion.div {...fadeRight} className="moreAboutUs-component">
      <h3>{h3}</h3>
      <p>{p}</p>
    </motion.div>
  );
}

export default MoreAboutUs;
