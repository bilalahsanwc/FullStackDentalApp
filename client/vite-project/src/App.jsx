import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Book from "./pages/Book/Book";
import businessData from "./data/businessData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoyalPlan from "./pages/LoyalPlan/LoyalPlan";
import ContactForm from "./components/ContactForm/ContactForm";
import ScrollToTop from "./assets/ScrollToTop";
import PatientInfo from "./pages/PatientInfo/PatientInfo";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patientInfo" element={<PatientInfo />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <ContactForm></ContactForm>

      <Footer
        clinicName={businessData.Footer.clinicName}
        year={businessData.Footer.year}
        MonToFri={businessData.Footer.monToFri}
        SatToSun={businessData.Footer.satToSun}
        address={businessData.Footer.location}
        mail={businessData.Footer.email}
        tel={businessData.Footer.tel}
        bookNow={businessData.Footer.ctaText}
        instaLink={businessData.Footer.instaLink}
        fbLink={businessData.Footer.fbLink}
      ></Footer>
    </BrowserRouter>
  );
}

export default App;
