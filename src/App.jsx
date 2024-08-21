import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogosDiv from "./components/LogosDiv";
import Services from "./components/Services";
import ServicesCard from "./components/ServicesCard";
import ThingsHappen from "./components/ThingsHappen";
import CaseStudy from "./components/CaseStudy";
import CaseStudyData from "./components/CaseStudyData";
import WorkingProcess from "./components/WorkingProcess";
import Consultaion from "./components/Consultaion";
import Team from "./components/Team";
import EmployesContainer from "./components/EmployesContainer";
import SeeAll from "./components/SeeAll";
import Testimonials from "./components/Testimonials";
import Check from "./components/Check";
import ContactUs from "./components/ContactUs";
import FormContainer from "./components/FormContainer";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogosDiv />
      <Services/>
      <ServicesCard/>
      <ThingsHappen/>
      <CaseStudy/>
      <CaseStudyData/>
      <WorkingProcess/>
     <Consultaion/>
     <Team/>
     <EmployesContainer/>
     <SeeAll/>
     <Testimonials/>
     <Check/>
     <ContactUs/>
     <FormContainer/>
     <Footer/>
    </>
  );
}
export default App;
