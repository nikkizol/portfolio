import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

function Footer() {
  return (
    <>
      <div className="phantom"></div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="footerLogo">MZ</h4>
            </div>
            <div className="col-sm">
              <a href="https://github.com/nikkizol">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/learnbuildteach/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/amthau">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/nikita_zhol/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="col">
              <h5>©2020</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
