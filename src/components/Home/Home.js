import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import pic from "../../images/pic.jpg";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
  return (
    <Router>
      <div className="media">
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-lg-6 gauche mt-5 ">
              <h1 className="mb-1" data-aos="fade-up" data-aos-delay="100">
                Mykyta Zholkovskyi
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Currently following a training at BeCode to become a Full-Stack
                Developer. I am results-driven and motivated student, with
                solution mindset and with passion for web development!
              </p>
              <Link
                to="/AboutMe"
                className="linktoAboutMe"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                About Me
              </Link>
            </div>

            <div class="col-lg-4 corps">
              <img
                className="myPic"
                src={pic}
                alt="Mykyta Zholkovskyi"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
      <Route path="/AboutMe" exact component={AboutMe} />
    </Router>
  );
}

export default Home;
