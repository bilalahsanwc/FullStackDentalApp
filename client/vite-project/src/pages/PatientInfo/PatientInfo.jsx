import React from "react";
import Header from "../../components/Header/Header";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import { CircleCheck } from "lucide-react";
import "./PatientInfo.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { scaleIn, fadeLeft, fadeIn, fadeUp } from "../../assets/animation";
import { motion } from "framer-motion";
import SEO from "../../components/SEO/SEO";
import businessData from "../../data/businessData";
function PatientInfo() {
  return (
    <div className="loyalDentalPlanPage">
      <SEO
        title="Patient Information"
        description="Read Patient features added to make quality care more accessible."
      />

      <Header></Header>
      <HeroComponent
        animation={scaleIn}
        heading="Patient Information"
        bgPath={"/clients/zentooth/patientInfo.png"}
      ></HeroComponent>
      <section className="loyalDentalPlan">
        <div className="loyalDentalPlan-content">
          <div className="loyalplan-content-r1">
            <motion.h3 {...fadeLeft} className="loyalDentalPlan-content-h3">
              Convenient, quality dental care in the heart of Atlanta
            </motion.h3>
            <motion.p {...fadeLeft} className="loyalDentalPlan-content-p">
              Our practice is in full compliance with the standards of infection
              control advocated by the Office of Safety and Health
              Administration (OSHA), the American Association of Endodontists
              (AAE) and the American Dental Association (ADA).
            </motion.p>
          </div>
          <div className="loyalplan-content-r2">
            <span className="loyalplan-content-r2-head">
              {businessData.practiceInfo.section1Heading}
            </span>

            <ul>
              {businessData.practiceInfo.section1List.map((item) => (
                <motion.li {...fadeUp} key={item}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <hr />
          <motion.div {...fadeIn} className="loyalplan-content-r3">
            <h4>{businessData.practiceInfo.section2Heading}</h4>

            <div className="loyalPlanListContainer">
              <div className="loyalPlanListContainer-content">
                {businessData.practiceInfo.section2List.map((item) => (
                  <p key={item}>
                    <span>
                      <CircleCheck className="loyalPlanIcon" />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PatientInfo;
