import { MapPin, Mail, Phone } from "lucide-react";
import "./Footer.css";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({
  clinicName,
  year,
  MonToFri,
  SatToSun,
  address,
  mail,
  tel,
  bookNow,
}) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-c1">
          <span className="chead cheadClinicName">{clinicName}</span>
          <div>
            <FaFacebookF />
            <FaInstagram />
          </div>
          <span className="copyright-container">
            &copy; {year} {clinicName}.
          </span>
        </div>
        <div className="footer-c2">
          <span className="chead">Hours of Operation</span>
          <div>
            <span className="cbody">Mon-Fri: {MonToFri}</span>
            <br />
            <span className="cbody">Sat-Sun: {SatToSun}</span>
          </div>
        </div>
        <div className="footer-c3">
          <span className="chead">Contact Us</span>
          <span className="cbody locationCbody">
            <MapPin className="cbodyIcon locationIcon" size={48}></MapPin>{" "}
            {address}
          </span>
          <div>
            <span className="cbody">
              <Mail className="cbodyIcon" size={16}></Mail>
              {mail}
            </span>
            <br />
            <span className="cbody">
              <Phone size={16}></Phone> {tel}
            </span>
          </div>
        </div>
        <div className="footer-c4">
          <div>
            <span className="chead">Menu</span>
            <ul className="menu-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/loyalPlan">Loyal Plan</Link>
              </li>
              <li>
                <Link to="/book">Contact</Link>
              </li>
            </ul>
            <Link className="footer-cta" to="/book">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
