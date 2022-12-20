import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <Landing />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
