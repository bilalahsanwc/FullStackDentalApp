import React from "react";
import Button from "../Button/Button";
import "./CtaComponent.css";
function CtaComponent({ h, subH, compCtaText, compHref, bgImage }) {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="ctaComponent"
    >
      <div className="ctaComponent-content">
        <div>
          <h3>{h}</h3>
          <span className="subHeading">{subH}</span>
        </div>
        <Button
          className="ctaCompBtn"
          ctaText={compCtaText}
          href={compHref}
        ></Button>
      </div>
    </section>
  );
}

export default CtaComponent;
