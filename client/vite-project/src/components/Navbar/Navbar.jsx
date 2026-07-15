import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../assets/animation";
function Navbar() {
  return (
    <nav>
      <motion.ul {...fadeRight}>
        <li>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/patientInfo">
            Patient Information
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/book">
            Book
          </NavLink>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Navbar;
