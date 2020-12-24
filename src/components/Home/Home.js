import React from "react";

import "./styles.css";
import pic from "../../images/pic.jpg";

function Home() {
  return (
    <>
      <div className="media">
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div
              class="col-lg-6 gauche mt-5 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1 className="mb-1">Mykyta Zholkovskyi</h1>
              <p>
                Currently following a training at BeCode to become a Full-Stack
                Developer. I am results-driven and motivated student, with
                solution mindset and with passion for web development!
              </p>
            </div>

            <div class="col-lg-4 corps">
              <img
                className="myPic"
                src={pic}
                alt="Mykyta Zholkovskyi"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>

      {/* <div className="media">
        <div className="container">
          <div className="row ">
            <div className="col-5" data-aos="fade-up" data-aos-delay="300">
              <h1 className="mb-1">Mykyta Zholkovskyi</h1>
              <p>
                Currently following a training at BeCode to become a Full-Stack
                Developer. I am results-driven and motivated student, with
                solution mindset and with passion for web development!
              </p>
            </div>
            <div className="col-5">
              <img
                className="myPic"
                src={pic}
                alt="Mykyta Zholkovskyi"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
