import { useState } from "react";
import HomeCarousel from "./components/HomeCarousel";
import AboutSection from "./components/AboutSection";
import OurWorksSection from "./components/OurWorksSection";
import ExperienceSection from "./components/ExperienceSection";

function Homepage() {
  return (
    <>
      <div className="">
        <HomeCarousel />
        <AboutSection />
        <OurWorksSection />
        <ExperienceSection />
      </div>
    </>
  );
}

export default Homepage;
