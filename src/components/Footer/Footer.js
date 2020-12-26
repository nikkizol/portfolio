import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  f2b6,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

function Footer() {
  return (
    <>
      <div data-aos="fade-up ">
        <div className="footer">
          <div className="container footer-container">
            <div class="row">
              <div class="col">
                <h4>Mykyta Zholkovskyi</h4>
              </div>
              <div class="col">
                <a
                  href="https://www.youtube.com/c/jamesqquick"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.facebook.com/learnbuildteach/"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.twitter.com/jamesqquick"
                  className="twitter social"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div class="col">
                <h4>©2020</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
