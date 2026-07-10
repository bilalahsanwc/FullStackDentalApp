import "./Header.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { businessData } from "../../data/businessData";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeLeft, fadeRight, fadeUp } from "../../assets/animation";
import { Link } from "react-router-dom";
function Header() {
  const [isCloseNav, setIsCloseNav] = useState(true);
  return (
    <header>
      <div className="header-content">
        <img src={businessData.homepage.clinicInfo.logo} alt="" />
        <Navbar className="navbar"></Navbar>

        <button
          className="header-contact-toggle"
          onClick={() => setIsCloseNav((prev) => !prev)}
        >
          <Menu
            className={`header-icon menu-icon ${isCloseNav ? "show" : "hide"}`}
          />

          <X className={`header-icon close ${isCloseNav ? "hide" : "show"}`} />
        </button>
        <motion.nav
          {...fadeUp}
          className={`mobile-nav ${!isCloseNav ? "open" : ""}`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li className="last-li">
              <Link to="book">Book</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}

export default Header;
