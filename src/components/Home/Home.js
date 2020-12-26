import React from "react";

import "./styles.css";
import pic from "../../images/pic.jpg";
import AboutMe from "../AboutMe/AboutMe";

function Home(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push("/AboutMe");
  };

  return (
    <>
      <div className="media">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-6 gauche mt-5 ">
              <h1 className="mb-1" data-aos="fade-up" data-aos-delay="100">
                Mykyta Zholkovskyi
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Currently following a training at BeCode to become a Full-Stack
                Developer. I am results-driven and motivated student, with
                solution mindset and with passion for web development!
              </p>
              <a
                href="#0"
                className="linktoAboutMe"
                onClick={handleClick}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                About Me
              </a>
            </div>

            <div className="col-lg-4 corps">
              <img
                className="myPic"
                src={pic}
                alt="Mykyta Zholkovskyi"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
