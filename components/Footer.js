import React from 'react';
import Image from "next/image";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
      <div>
        <Image
          className="logo-footer"
          src="/favicon.png"
          alt="UCSD Solar Car logo"
          layout="intrinsic"
          width="250"
          height="200"
        />
      </div>
      {/* <div>
       <div className="footer-link-container">
        <a className="footer-link">Mechanical</a>
        <a className="footer-link">Electrical</a>
        <a className="footer-link">Team</a>
        <a className="footer-link">Contact</a>
        <a className="footer-link">Donate</a>
       </div>
      </div> */}
      <div className="footer-social-container">
        <a href="https://www.instagram.com/ucsdsolarcar/ " target="_blank" className="footer-social-logo-container button-link">
          <Image
            className="logo-footer"
            src="/instagram-logo.png"
            layout="intrinsic"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.facebook.com/ucsdsolarcar/ " target="_blank" className="footer-social-logo-container button-link">
          <Image
            className="logo-footer"
            src="/facebook-logo.png"
            layout="intrinsic"
            width="40"
            height="40"
          />
        </a>
        {/* <a className="footer-social-logo-container">
          <Image
            className="logo-footer"
            src="/linkedin-logo.png"
            layout="intrinsic"
            width="40"
            height="40"
          />
        </a> */}
        <a href="mailto: ucsdsolarcar@gmail.com" target="_blank" className="footer-social-logo-container button-link">
          <Image
            className="logo-footer"
            src="/email-logo.png"
            layout="intrinsic"
            width="40"
            height="40"
          />
        </a>
      </div>
      </div>
      <div className="footer-copyright">
        © 2021 Triton Solar Car. All rights reserved.
      </div>
    </div>
  )};

export default Footer;