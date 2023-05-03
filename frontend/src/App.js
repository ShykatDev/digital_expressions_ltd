import React, { useEffect } from "react";
import "./Styles/app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";
import {
  HomeComp,
  AboutComp,
  ProjectsComp,
  CareerComp,
  ContactComp,
  ServicesComp
} from "./Components";
import ScrollTop from "./Components/ui/ScrollTop";

function App() {
  // let pathname = useLocation();
  // console.log(pathname);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/projects" element={<ProjectsComp />} />
          <Route path="/contact" element={<ContactComp />} />
          <Route path="/career" element={<CareerComp />} />
          <Route path="/services" element={<ServicesComp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
