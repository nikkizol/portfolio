import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

function App() {
  AOS.init();
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
