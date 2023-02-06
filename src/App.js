import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import { UseEffectScroll } from "react-use-smooth-scroll";
// import "react-use-smooth-scroll/dist/index.css";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        {/* <UseEffectScroll> */}
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* </UseEffectScroll> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
