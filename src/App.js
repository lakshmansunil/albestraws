import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavComponents/Navbar";
import ParticlesComponent from "./components/ParticlesComponents";
import Main from "./components/HomeComponents/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrolltotop";
import Careers from "./components/careers";
import PageNotFound from "./404";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutUs from "./components/AboutUs";
import Expertise from "./Expertise";
import DataCenter from './DataCenter';
import Service1 from "./components/services/Service1";  
import Service2 from "./components/services/Service2";  
import Service3 from "./components/services/Service3";
import Service4 from "./components/services/Service4";
import Service5 from "./components/services/Service5";
import ServicesPage from "./components/services/ServicesPage.js";

const HomePage = () => {
  return (
    <>
      <ParticlesComponent id="particleJs" />
      <Main />
      <ServicesPage/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="flex gap-3">
        <ScrollToTop />
      </section>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/data-center" element={<DataCenter />} />
        <Route path="/services/ServicePage" element={<ServicesPage />} />
        <Route path="/services/service1" element={<Service5 />} />  
        <Route path="/services/service2" element={<Service4 />} /> 
        <Route path="/services/service3" element={<Service3 />} />
        <Route path="/services/service4" element={<Service2 />} />
        <Route path="/services/service5" element={<Service1 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
