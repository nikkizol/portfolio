import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./styles.css";

function Nav() {
  return (
    <Router>
      <header className="sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Link className="logo" to="/">
                <p className="mz" mb-2>
                  MZ
                </p>
                <p className="fullName">MYKYTA ZHOLKOVKSYI</p>
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link dark active">
                      Home
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/Projects" className="nav-link dark active">
                      Projects
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/Contact" className="nav-link dark active">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />
            <Route path="/" exact component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </header>
    </Router>
  );
}

export default Nav;
