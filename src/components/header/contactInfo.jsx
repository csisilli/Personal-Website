import React from "react";

import CV from "../../assets/bg-texture.png";
const contactInfo = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default contactInfo;
