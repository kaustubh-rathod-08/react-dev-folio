import React from "react";
import "./contact.css";
import Seperator from "../../common/seperator/index";
import SocialContact from "../../common/social-contact/index";

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>You can find me on</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf")}>
            <i class="fi fi-sr-cloud-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
