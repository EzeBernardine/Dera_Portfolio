import React from "react";
import { LandingStyle } from "./styles";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import Projects from "../../component/Projects";
import Contact from "../../component/Contact";
import NewsLetter from "../../component/NewsLetter";
import Footer from "../../component/Footer";

const Landing = () => {
  return (
    <LandingStyle>
      <div className="topline" />
      <Menu />
      <Header />
      <Projects />
      <Contact />
      <NewsLetter />
      <Footer />
    </LandingStyle>
  );
};
export default Landing;
