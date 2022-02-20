import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          A-yo 🤘, I'm
          <br /> <span className="info-name">Vedant Yetekar.</span>
          <br />I love to code.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/me.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
